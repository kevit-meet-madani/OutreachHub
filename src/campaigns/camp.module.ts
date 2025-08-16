import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignSchema, OutCampaign } from 'src/schemas/camp.schema';
import { CampService } from './camp.service';
import { CampController } from './camp.controller';

@Module({
    imports : [
        MongooseModule.forFeature([
            {
                name:OutCampaign.name,
                schema:CampaignSchema
            }
        ])
    ],
    providers:[CampService],
    controllers:[CampController]
})

export class CampModule{}