import { IsNotEmpty , IsOptional} from "class-validator"
import mongoose from 'mongoose'

export class Content{
    @IsOptional()
    text:string

   @IsOptional()
    imagePath:string
}

export class UpdateMessageDto{

    @IsNotEmpty()
    name:string

    @IsOptional()
    type:string

    @IsOptional()
    workspaceId:mongoose.Types.ObjectId

    @IsOptional()
    createdBy:mongoose.Types.ObjectId

   @IsOptional()
    content:Content
}

