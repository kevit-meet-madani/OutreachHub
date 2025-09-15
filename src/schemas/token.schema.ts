import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema()
export class Token {

    @Prop({required:true})
    token:string

    @Prop({type:Date,default: () => new Date()})
    createdAt:Date
}

export const tokenSchema = SchemaFactory.createForClass(Token);


tokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 }); 



