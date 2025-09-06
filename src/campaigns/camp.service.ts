import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OutCampaign } from "src/schemas/camp.schema";
import { CreateCampaignDto } from "./dto/createcamp.dto";
import { UpdateCampaignDto } from "./dto/update.dto";

export class CampService{
    constructor(@InjectModel(OutCampaign.name) private campModel:Model<OutCampaign>){}

    getCampaigns(req:any){
        return this.campModel.find({workspaceId:req["user"].wid}).populate('createdBy','username role right').populate('workspaceId').exec();
    }

    getCampaignById(id:string){
        return this.campModel.findById(id).populate('createdBy','username role right').populate('workspaceId').exec();
    }

    createCampaign(campDto:CreateCampaignDto,req:any){
        campDto["createdBy"] = req["user"].id;
        const newCamp = new this.campModel(campDto);
        return newCamp.save();
    }

    updateCampaign(id:string,campDto:UpdateCampaignDto){
        return this.campModel.findByIdAndUpdate(id,campDto).exec();
    }

    deleteCampaign(id:string){
        return this.campModel.findByIdAndDelete(id).exec();
    }
}