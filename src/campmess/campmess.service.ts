import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OutCampaign } from "src/schemas/camp.schema";
import { CreateCamMessessDto } from "./dto/createcamp.dto";
import { UpdateCampMessDto } from "./dto/update.dto";
import { CampMess } from "src/schemas/campaignmessage.schema";

export class CampMessService{
    constructor(@InjectModel(CampMess.name) private campMessodel:Model<CampMess>){}

    getCampaigns(req:any){
        return this.campMessodel.find({workspaceId:req["user"].wid}).populate('createdBy','username role right').populate('workspaceId').exec();
    }

    getCampaignById(id:string){
        return this.campMessodel.findById(id).populate('createdBy','username role right').populate('workspaceId').exec();
    }

    createCampaign(campmessDto:CreateCamMessessDto,req:any){
        campmessDto["createdBy"] = req["user"].id;
        const newCamp = new this.campMessodel(campmessDto);
        return newCamp.save();
    }

    updateCampaign(id:string,campmessDto:UpdateCampMessDto){
        return this.campMessodel.findByIdAndUpdate(id,campmessDto).exec();
    }

    deleteCampaign(id:string){
        return this.campMessodel.findByIdAndDelete(id).exec();
    }

    getMsgTypeChart(daterange:string){
        const arr = daterange.trim().split(' ');
        const dates = [new Date(arr[0]),new Date(arr[1])];

        return this.campMessodel.aggregate([
            {
                $match:{createdAt:{$gte:dates[0],$lte:dates[1]},workspaceId:arr[2]}
            },
            {
                $group:{
                    _id:{
                        createdAt:{$dateToString:{format: "%Y-%m-%d",date:"$createdAt"}},
                        type:"$templateData.type",
                    },
                    count:{$sum : 1}
                }
            },
            {
                $group:{
                    _id:"$_id.createdAt",
                    types:{
                        $push:{
                            type:"$_id.type",
                            total:"$count"
                        }
                    }
                }
            },
            { $sort: { _id: 1 } }
        ])
    }
}