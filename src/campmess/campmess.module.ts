import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignSchema, OutCampaign } from 'src/schemas/camp.schema';

import {  CampMessController } from './campmess.controller';
import { AuthModule } from 'src/auth/auth.module';
import { CampaignMessageSchema, CampMess } from 'src/schemas/campaignmessage.schema';
import { CampMessService } from './campmess.service';

@Module({
    imports : [
        MongooseModule.forFeature([
            {
                name:CampMess.name,
                schema:CampaignMessageSchema
            }
        ]),
        AuthModule
    ],
    providers:[CampMessService],
    controllers:[CampMessController]
})

export class CampMessModule{}