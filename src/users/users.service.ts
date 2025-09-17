import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { OutUser } from "src/schemas/users.schema";
import { Model } from 'mongoose'
import { createUserDto } from "./dto/createUser.dto";
import * as bcrypt from 'bcrypt'
import { updateUserDto } from "./dto/updateUser.dto"; 
import { listDto } from "./dto/list.dto";

@Injectable()
export class UserService{
    constructor(@InjectModel(OutUser.name) private userModel:Model<OutUser>){}

    async createUser(createUserDto : createUserDto){

        const {password,...rest} = createUserDto;
        const hashedPass = await bcrypt.hash(password,15);
        
        const obj = {...rest,password:hashedPass}
        const newuser = new this.userModel(obj);
        console.log(obj);
        
        return newuser.save();
    }

    getUsers(){
        return this.userModel.find({},'id  email password role right workspaces').populate('workspaces').exec();
    }

    getUserById(id:string){
        return this.userModel.findById({_id:id},'id  username role right workspaces').exec();
    }

    deleteUser(id:string){
        return this.userModel.findByIdAndDelete(id);
    }

    updateUser(id:string , updateUserDto:updateUserDto){
        return this.userModel.findByIdAndUpdate(id,updateUserDto);
    }

    async getWorkspaces(req:any){
        const decoded = req["user"];
        console.log(decoded);
        return await this.userModel.find({_id:decoded.id},'workspaces').populate('workspaces').then();
    }

    getUsersByWorks(id:string){
        return this.userModel.find({workspaces:id,role:'user'}).select('email right createdAt');
    }

    getToggledUsersByWorks(id:string){
        return this.userModel.find({workspaces:{$ne : id},role:'user'}).select('_id email name');
    }

    async addWorkspaceToArray(id:string,body:any[]){

        console.log(body)
        const ids = body.map(item => item._id);
        console.log(ids)

        const res = await this.userModel.updateMany(
            {_id:{$in:ids}},
            {$push:{workspaces:id}}
        ).exec();
        
        return res;
    }

    getUsersCount(id:string){
        return this.userModel.countDocuments({workspaces:id});
    }
}