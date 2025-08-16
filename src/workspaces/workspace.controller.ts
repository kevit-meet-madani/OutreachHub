import { Controller , Get , Post , Delete , Patch , Body , Param , UseGuards, UsePipes, ValidationPipe, HttpException } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { createWorkspaceDto } from './dto/create.workspace.dto';
import { UpdateWorkspaceDto } from './dto/update.workspace.dto';

@Controller('workspaces')
export class WorkspaceController
{
    constructor(private workspaceService:WorkspaceService){}
    
    @Get()
    getWorkspaces(){
        return this.workspaceService.getWorkspaces();
    }

    @Get(':id')
    getWorkspaceById(@Param('id') id:string){
        return this.workspaceService.getWorkspaceById(id);
    }

    @Post()
    createWorkspace(@Body() createWorkspace:createWorkspaceDto){
        return this.workspaceService.createWorkspace(createWorkspace);
    }

    @Delete(':id')
    deleteWorkspace(@Param('id') id:string){
        const bool = this.workspaceService.deleteWorkspace(id);
        return bool;
    }

    @Patch(':id')
    updateWorkspace(@Param('id') id:string, @Body() updateWorkspace:UpdateWorkspaceDto){
        return this.workspaceService.updateWorkspace(id,updateWorkspace);
    }
}