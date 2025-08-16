import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { OutWorkspaaceSchema, OutWorkspace } from 'src/schemas/workspace.schema';
import { WorkspaceService } from './workspace.service';
import { WorkspaceController } from './workspace.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name:OutWorkspace.name,
                schema:OutWorkspaaceSchema
            }
        ]),
        AuthModule
    ],
    providers:[WorkspaceService],
    controllers:[WorkspaceController]
})
export class WorkspacesModule{}