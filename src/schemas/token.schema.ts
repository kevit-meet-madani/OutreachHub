import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TokenDocument = Token & Document;


@Schema({timestamps:true})
export class Token{

    @Prop({required:true})
    token:string

    @Prop({default:Date.now,expires:'1h'})
    createdAt:Date
}

export const tokenSchema = SchemaFactory.createForClass(Token);