import mongoose from "mongoose";
import { Prop , Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class OutContacts{
    @Prop({required:true,unique:true})
    name:string;

    @Prop({required:true,unique:true})
    phoneNumber:string;

    @Prop({required:true})
    tag:string;

    @Prop({type:mongoose.Types.ObjectId,ref:'OutUser'})
    createdBy:mongoose.Types.ObjectId;

    @Prop({type:mongoose.Types.ObjectId,ref:'OutWorkspace'})
    workspace:mongoose.Types.ObjectId;

    @Prop({type:Date,default: () => new Date()})
    createdAt:Date
}

export const OutContactsSchema = SchemaFactory.createForClass(OutContacts);    