import { IsNotEmpty } from "class-validator";

export class createWorkspaceDto{
    @IsNotEmpty()
    name:string;

    createdBy:string;

    @IsNotEmpty()
    summary:string;
}