import mongoose from "mongoose";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OutContacts } from "src/schemas/contacts.schema";
import { createContactDto } from "./dto/create.contact.dto";
import { Model } from 'mongoose';
@Injectable()
export class ContactService
{
    constructor(@InjectModel(OutContacts.name) private contactModel:Model<OutContacts>){}

    getContacts(){
        return this.contactModel.find().populate('createdBy','username role right').populate('workspace');
    }

    getContactById(id:string){
        return this.contactModel.findById(id).populate('createdBy','username role right').populate('workspace');
    }

    createContact(contactDto:createContactDto){
        const newContact = new this.contactModel(contactDto);
        console.log(contactDto);
        return newContact.save();
    }

    deleteContact(id:string){
        return this.contactModel.findByIdAndDelete(id).exec();
    }

    updateContact(id:string,contactDto:createContactDto){
        return this.contactModel.findByIdAndUpdate(id,contactDto,{new :true});
    }
}