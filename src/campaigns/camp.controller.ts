import { Controller , Body , Get , Post , Delete , Patch , Param, UseGuards, Req} from "@nestjs/common";
import { CampService } from "./camp.service";
import { CreateCampaignDto } from "./dto/createcamp.dto";
import { UpdateCampaignDto } from "./dto/update.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller('campaigns')

export class CampController{
    constructor(private campService:CampService){}
    
    @Get()
    @UseGuards(AuthGuard)
    getCampaigns(@Req() req:Request){
        return this.campService.getCampaigns(req);
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    getCampaignById(@Param('id') id:string){
        return this.campService.getCampaignById(id);
    }

    @Post()
    @UseGuards(AuthGuard)
    createCampaign(@Body() campDto:CreateCampaignDto,@Req() req:Request){
        return this.campService.createCampaign(campDto,req);
    }

    @Patch(':id')
    @UseGuards(AuthGuard)
    updateCampaign(@Param('id') id:string, @Body() campDto:UpdateCampaignDto){
        return this.campService.updateCampaign(id,campDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    deleteCampaign(@Param('id') id:string){
        return this.campService.deleteCampaign(id);
    }
}