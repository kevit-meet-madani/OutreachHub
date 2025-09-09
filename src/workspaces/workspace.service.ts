import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { OutWorkspace } from "src/schemas/workspace.schema";
import { Model } from 'mongoose';
import { createWorkspaceDto } from "./dto/create.workspace.dto";
import { UpdateWorkspaceDto } from "./dto/update.workspace.dto";

@Injectable()
export class WorkspaceService{
    
    constructor(@InjectModel(OutWorkspace.name) private workspaceModel:Model<OutWorkspace>){}

    getWorkspaces(){
        return this.workspaceModel.find().populate('createdBy','email role right');
    }

    getWorkspaceById(id:string){
        return this.workspaceModel.findById(id);
    }

    createWorkspace(createWorkspaceDto:createWorkspaceDto,req:any){
          createWorkspaceDto["createdBy"] = req["user"].id;
          const newWorkspace = new this.workspaceModel(createWorkspaceDto);
          return newWorkspace.save();
    }

    deleteWorkspace(id:string){
        return this.workspaceModel.findByIdAndDelete(id);
    }

    updateWorkspace(id:string,updateWorkspace:UpdateWorkspaceDto){
        return this.workspaceModel.findByIdAndUpdate(id,updateWorkspace);
    }
}