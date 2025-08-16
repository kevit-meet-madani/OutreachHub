import { IsNotEmpty } from "class-validator";

export class createWorkspaceDto{
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    createdBy:string;

    @IsNotEmpty()
    summary:string;
}