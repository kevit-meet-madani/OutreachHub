import { Controller , Body , Get , Post , Delete , Patch , Param, UseGuards, Req} from "@nestjs/common";
import { CreateCamMessessDto } from "./dto/createcamp.dto";
import { UpdateCampMessDto } from "./dto/update.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { CampMessService } from "./campmess.service";

@Controller('campmess')

export class CampMessController{
    constructor(private campmessService:CampMessService){}
    
    @Get()
    @UseGuards(AuthGuard)
    getCampaigns(@Req() req:Request){
        return this.campmessService.getCampaigns(req);
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    getCampaignById(@Param('id') id:string){
        return this.campmessService.getCampaignById(id);
    }

    @Post()
    @UseGuards(AuthGuard)
    createCampaign(@Body() campmessDto:CreateCamMessessDto,@Req() req:Request){
        return this.campmessService.createCampaign(campmessDto,req);
    }

    @Patch(':id')
    @UseGuards(AuthGuard)
    updateCampaign(@Param('id') id:string, @Body() campmessDto:UpdateCampMessDto){
        return this.campmessService.updateCampaign(id,campmessDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    deleteCampaign(@Param('id') id:string){
        return this.campmessService.deleteCampaign(id);
    }

    @Get('/chart/:daterange')
    getMsgTypeChart(@Param('daterange') daterange:string){
       return this.campmessService.getMsgTypeChart(daterange);
    }
}