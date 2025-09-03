import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema()
export class Token {

    @Prop({required:true})
    token:string
}

export const tokenSchema = SchemaFactory.createForClass(Token);

// Set TTL index on expiresAt field to expire documents after 3600 seconds
