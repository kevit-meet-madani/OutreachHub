import { IsNotEmpty } from "class-validator";

export class UpdateWorkspaceDto{
    @IsNotEmpty()
    name:string;
    
    createdBy:string;
    
    @IsNotEmpty()
    summary:string;
}