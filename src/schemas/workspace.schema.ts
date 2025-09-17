import { Schema , Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class OutWorkspace
{
    @Prop({required:true, unique:true})
    name:string;

    @Prop({required:true,ref:'OutUser'})
    createdBy:mongoose.Types.ObjectId;

    @Prop({required:true})
    summary:string

    @Prop({type:Date,default: () => new Date()})
    createdAt:Date
}

export const OutWorkspaaceSchema = SchemaFactory.createForClass(OutWorkspace);