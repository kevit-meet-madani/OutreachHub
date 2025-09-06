import { Get, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OutMessage } from "src/schemas/message.schema";
import { createMessageDto } from "./dto/create.message.dto";
import { UpdateMessageDto } from "./dto/update.message.dto";

@Injectable()
export class MessageService{
    constructor(@InjectModel(OutMessage.name) private messageModel:Model<OutMessage>){}

    getMessages(req:any){

        const decoded = req["user"];
        decoded["wid"] = req["user"].wid;
        return this.messageModel.find({workspaceId:decoded.wid}).populate('createdBy','username role right').populate('workspaceId').exec();
    }

    getMessageById(id:string){
        return this.messageModel.findById(id).populate('createdBy','username role right').populate('workspaceId').exec();
    }

    createMessage(messageDto:createMessageDto,req:any){
        messageDto["createdBy"] = req["user"].id;
        const newmsg = new this.messageModel(messageDto);
        return newmsg.save();
    }

    updateMessage(id:string,messageDto:UpdateMessageDto){
        return this.messageModel.findByIdAndUpdate(id,messageDto);
    }

    deleteMessage(id:string){
        return this.messageModel.findByIdAndDelete(id).exec();
    }
}