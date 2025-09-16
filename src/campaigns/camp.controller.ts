import { Controller , Body , Get , Post , Delete , Patch , Param, UseGuards, Req, Query} from "@nestjs/common";
import { CampService } from "./camp.service";
import { CreateCampaignDto } from "./dto/createcamp.dto";
import { UpdateCampaignDto } from "./dto/update.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { CampPaginationQueryDto } from "./dto/camppage.dto";

@Controller('campaigns')

export class CampController{
    constructor(private campService:CampService){}
    
    // @Get('camps/:id')
    // @UseGuards(AuthGuard)
    // getCampaigns(@Param('id') id:string){
    //     return this.campService.getCampaigns(id);
    // }

    @Get('camps/:id')
    findAll(@Query() paginationQuery: CampPaginationQueryDto,@Param('id') id:string) {
        return this.campService.findAll(paginationQuery,id);
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

    @Get('recent/:id')
    @UseGuards(AuthGuard)
    getRecentCampaigns(@Param('id') id:string){
         return this.campService.getRecentCampaigns(id);
    }

    @Get('/chart/:daterange')
    getCampChart(@Param('daterange') daterange:string){
        return this.campService.getCampChart(daterange);
    }

    @Patch('status/:id')
    changeStatus(@Param('id') id:string,@Body() body:any){
        console.log(body);
        console.log(id);
        return this.campService.changeStatus(id,body);
    }
}