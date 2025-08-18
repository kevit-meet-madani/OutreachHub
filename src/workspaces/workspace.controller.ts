import { Controller , Get , Post , Delete , Patch , Body , Param , UseGuards, UsePipes, ValidationPipe, HttpException } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { createWorkspaceDto } from './dto/create.workspace.dto';
import { UpdateWorkspaceDto } from './dto/update.workspace.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('workspaces')
export class WorkspaceController
{
    constructor(private workspaceService:WorkspaceService){}
    
    @Get()
    @UseGuards(AuthGuard)
    getWorkspaces(){
        return this.workspaceService.getWorkspaces();
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    getWorkspaceById(@Param('id') id:string){
        return this.workspaceService.getWorkspaceById(id);
    }

    @Post()
    @UseGuards(AuthGuard)
    createWorkspace(@Body() createWorkspace:createWorkspaceDto){
        return this.workspaceService.createWorkspace(createWorkspace);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    deleteWorkspace(@Param('id') id:string){
        const bool = this.workspaceService.deleteWorkspace(id);
        return bool;
    }

    @Patch(':id')
    @UseGuards(AuthGuard)
    updateWorkspace(@Param('id') id:string, @Body() updateWorkspace:UpdateWorkspaceDto){
        return this.workspaceService.updateWorkspace(id,updateWorkspace);
    }
}