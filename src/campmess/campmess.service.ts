import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OutCampaign } from "src/schemas/camp.schema";
import { CreateCamMessessDto } from "./dto/createcamp.dto";
import { UpdateCampMessDto } from "./dto/update.dto";
import { CampMess } from "src/schemas/campaignmessage.schema";

export class CampMessService{
    constructor(@InjectModel(CampMess.name) private campModel:Model<CampMess>){}

    getCampaigns(req:any){
        return this.campModel.find({workspaceId:req["user"].wid}).populate('createdBy','username role right').populate('workspaceId').exec();
    }

    getCampaignById(id:string){
        return this.campModel.findById(id).populate('createdBy','username role right').populate('workspaceId').exec();
    }

    createCampaign(campmessDto:CreateCamMessessDto,req:any){
        campmessDto["createdBy"] = req["user"].id;
        const newCamp = new this.campModel(campmessDto);
        return newCamp.save();
    }

    updateCampaign(id:string,campmessDto:UpdateCampMessDto){
        return this.campModel.findByIdAndUpdate(id,campmessDto).exec();
    }

    deleteCampaign(id:string){
        return this.campModel.findByIdAndDelete(id).exec();
    }
}