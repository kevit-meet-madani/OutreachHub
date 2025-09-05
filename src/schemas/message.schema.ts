import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';

export class Content{
    @Prop({required:true})
    text:string

    @Prop({required:true})
    imagePath:string
}

@Schema()
export class OutMessage{

    @Prop({required:true})
    name:string

    @Prop({required:true})
    type:string;

    @Prop({type:mongoose.Types.ObjectId,ref:'OutWorkspace'})
    workspaceId:mongoose.Types.ObjectId;

    @Prop({required:true,ref:'OutUser'})
    createdBy:mongoose.Types.ObjectId;

    @Prop({required:true})
    content:Content

    @Prop({type:Date,default: () => new Date()})
    createdAt:Date
}


export const messageSchema = SchemaFactory.createForClass(OutMessage);