import { IsNotEmpty , IsOptional, MinLength } from "class-validator";
import mongoose from 'mongoose'

export class listDto{
    array:liuser[]
}

class liuser{
    _id:string;
    name:string;
}