import mongoose from "mongoose";
import { Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OutContacts } from "src/schemas/contacts.schema";
import { createContactDto } from "./dto/create.contact.dto";
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';
import { PaginationQueryDto } from "./dto/pagination.dto";

@Injectable()
export class ContactService
{
    constructor(@InjectModel(OutContacts.name) private contactModel:Model<OutContacts>){}

    getContacts(id:string){
        return this.contactModel.find({workspace:id}).populate('_id createdBy','username role right').populate('workspace');
    }

    getContactById(id:string){
        return this.contactModel.findById(id).populate('createdBy','username role right').populate('workspace');
    }

     getContactsByTag(tags:string[]){
        const wid = tags[tags.length-1];
        tags.pop();


        // return this.contactModel.find({tag:{$in:tags},workspace:wid}).select('_id name phoneNumber');
        return this.contactModel.aggregate([
            {
                $unwind:"$tags"
            },
            {
                $match:{workspace:wid,tags:{$in:tags}}
            },
            {
                $group:{
                    _id:"$_id",
                    name:{$first:"$name"},
                    phoneNumber:{$first:"$phoneNumber"},
                    tags:{$addToSet:"$tags"},
                }
            }
        ])
    }

    createContact(contactDto:createContactDto,req:any){
        const decoded = req["user"];
        contactDto["createdBy"] = decoded.id;
        const newContact = new this.contactModel(contactDto);
        console.log(contactDto);
        return newContact.save();
    }

    deleteContact(id:string){
        return this.contactModel.findByIdAndDelete(id).exec();
    }

    updateContact(id:string,contactDto:createContactDto){
        return this.contactModel.findByIdAndUpdate(id,contactDto);
    }

    getTopTags(id: string) {
    return this.contactModel.aggregate([
        { $match: { workspace: id } },
        { $unwind: "$tags" },
        {
            $group: {
                _id: "$tags",
                count: { $sum: 1 }
            }
        },
        { $sort: { count: -1 } },
        { $limit: 5 }
    ]);
}

    async findAll(paginationQuery: PaginationQueryDto,id:string) {
    const { limit = 15, page = 1 } = paginationQuery;

    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.contactModel
        .find({workspace:id}).populate('_id createdBy','username role right').populate('workspace')
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 }) 
        .exec(),
      this.contactModel.countDocuments({workspace:id}),
    ]);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}