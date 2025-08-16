import { Controller , Body , Get , Post , Delete , Patch , Param} from "@nestjs/common";
import { CampService } from "./camp.service";
import { CreateCampaignDto } from "./dto/createcamp.dto";
import { UpdateCampaignDto } from "./dto/update.dto";

@Controller('campaigns')

export class CampController{
    constructor(private campService:CampService){}
    
    @Get()
    getCampaigns(){
        return this.campService.getCampaigns();
    }

    @Get(':id')
    getCampaignById(@Param('id') id:string){
        return this.campService.getCampaignById(id);
    }

    @Post()
    createCampaign(@Body() campDto:CreateCampaignDto){
        return this.campService.createCampaign(campDto);
    }

    @Patch(':id')
    updateCampaign(@Param('id') id:string, @Body() campDto:UpdateCampaignDto){
        return this.campService.updateCampaign(id,campDto);
    }

    @Delete(':id')
    deleteCampaign(@Param('id') id:string){
        return this.campService.deleteCampaign(id);
    }
}