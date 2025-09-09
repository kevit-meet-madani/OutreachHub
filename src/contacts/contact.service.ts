import mongoose from "mongoose";
import { Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OutContacts } from "src/schemas/contacts.schema";
import { createContactDto } from "./dto/create.contact.dto";
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class ContactService
{
    constructor(@InjectModel(OutContacts.name) private contactModel:Model<OutContacts>){}

    getContacts(req : any){
         
        const decoded = req["user"];

        console.log(decoded);
        return this.contactModel.find({workspace:decoded.wid}).populate('_id createdBy','username role right').populate('workspace');
    }

    getContactById(id:string){
        return this.contactModel.findById(id).populate('createdBy','username role right').populate('workspace');
    }

     getContactsByTag(tags:string[]){
        const wid = tags[tags.length-1];
        tags.pop();


        return this.contactModel.find({tag:{$in:tags},workspace:wid}).select('_id name');
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

    getTopTags(id:string){
        return this.contactModel.aggregate([
            {
                $match:{workspace:id}
            },
            {
                $group:{
                    _id:"$tag",
                    count:{$sum : 1}
                },
            },
            {
              $sort:{count:-1}
            }
        ]).limit(5)
    }
}