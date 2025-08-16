import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TokenDocument = Token & Document;

export class Token{

    @Prop({required:true})
    token:string
}

export const tokenSchema = SchemaFactory.createForClass(Token);