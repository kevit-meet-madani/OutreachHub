import { Body, Controller, Get , Param, Post , Patch , Delete, UseGuards, Req} from "@nestjs/common";
import { MessageService } from "./message.service";
import { createMessageDto } from "./dto/create.message.dto";
import { UpdateMessageDto } from "./dto/update.message.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller('messages')
export class MessageController{
    constructor(private messageService:MessageService){}

    @Get()
    @UseGuards(AuthGuard)
    getMessages(@Req() req:Request){
        return this.messageService.getMessages(req);
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    getMessageById(@Param('id') id:string){
        return this.messageService.getMessageById(id);
    }

    @Post()
    @UseGuards(AuthGuard)
    createMessage(@Body() messageDto:createMessageDto,@Req() req:Request){
        return this.messageService.createMessage(messageDto,req);
    }

    @Patch(':id')
    @UseGuards(AuthGuard)
    updateMessage(@Param('id') id:string,@Body() messageDto:UpdateMessageDto){
        return this.messageService.updateMessage(id,messageDto)
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    deleteMessage(@Param('id') id:string){
        return this.messageService.deleteMessage(id);
    }
}