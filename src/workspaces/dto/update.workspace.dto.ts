import { IsNotEmpty } from "class-validator";

export class UpdateWorkspaceDto{
    @IsNotEmpty()
    name:string;
    
    @IsNotEmpty()
    createdBy:string;
    
    @IsNotEmpty()
    summary:string;
}