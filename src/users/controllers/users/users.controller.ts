import { Controller , Get , Patch , Body , Post, UsePipes, ValidationPipe , Delete , Param , HttpException, UseGuards, Req} from '@nestjs/common';
import { createUserDto } from 'src/users/dto/createUser.dto';
import { UserService } from 'src/users/users.service';
import mongoose  from 'mongoose'
import { updateUserDto } from 'src/users/dto/updateUser.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { WorkspaceService } from 'src/workspaces/workspace.service';

@Controller('users')
export class UsersController {

    constructor(private userService:UserService){} 

    @Get()
    @UseGuards(AuthGuard)
    getUsers(){
        return this.userService.getUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id:string){

        const bool = mongoose.Types.ObjectId.isValid(id);
         if(!bool){
            throw new HttpException('User Not found',404);
         }
         const user = await this.userService.getUserById(id);
         if(!user){
            throw new HttpException('User Not found',404);
         }
       return user;
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto:createUserDto){
       return this.userService.createUser(createUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:string){
         const bool = mongoose.Types.ObjectId.isValid(id);
         if(!bool){
            throw new HttpException('User Not found',404);
         }
         const del = await this.userService.deleteUser(id);
         if(!del){
            throw new HttpException('User Not found',404);
         }
         return del;
    }

    
    @Patch(':id')
    async updateUser(@Param('id') id:string,@Body() updateUserDto:updateUserDto){
       const bool= mongoose.Types.ObjectId.isValid(id);
       if(!bool){
          throw new HttpException('User Not found',404);
       }
       const upUser = await this.userService.updateUser(id,updateUserDto);
       if(!upUser){
         throw new HttpException('User Not found',404);
       }
       return upUser;
    }

    @Get('workspaces')
    @UseGuards(AuthGuard)
    async getWorkspaces(@Req() req:Request){
      const res = await this.userService.getWorkspaces(req);  
      const arr = res[0].workspaces;

      
      return arr;
    }
}
