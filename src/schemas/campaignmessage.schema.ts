import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose'

@Schema({})
export class CampMess{
    
    @Prop({required:true,ref:'OutCampaign'})
    campaignId:mongoose.Types.ObjectId;

    @Prop({required:true,ref:'OutWorkspace'})
    workspaceId:mongoose.Types.ObjectId;

    @Prop({required:true,ref:'OutUser'})
    createdBy:mongoose.Types.ObjectId;

    @Prop({type:Object,required:true})
    templateData:Object;

    @Prop({required:true})
    tags:string[];

    @Prop({required:true})
    contacts:Object[];

    @Prop({default:Date.now})
    createdAt:Date
}    

export const CampaignMessageSchema = SchemaFactory.createForClass(CampMess);