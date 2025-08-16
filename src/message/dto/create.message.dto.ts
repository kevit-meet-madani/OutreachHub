import { IsNotEmpty } from "class-validator"
import mongoose from 'mongoose'

export class Content{
    @IsNotEmpty()
    text:string

    @IsNotEmpty()
    imagePath:string
}

export class createMessageDto{

    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    type:string

    @IsNotEmpty()
    workspaceId:mongoose.Types.ObjectId

    @IsNotEmpty()
    createdBy:mongoose.Types.ObjectId

    @IsNotEmpty()
    content:Content
}

