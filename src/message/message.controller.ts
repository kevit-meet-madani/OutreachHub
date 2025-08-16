import { Body, Controller, Get , Param, Post , Patch , Delete} from "@nestjs/common";
import { MessageService } from "./message.service";
import { createMessageDto } from "./dto/create.message.dto";
import { UpdateMessageDto } from "./dto/update.message.dto";

@Controller('messages')
export class MessageController{
    constructor(private messageService:MessageService){}

    @Get()
    getMessages(){
        return this.messageService.getMessages();
    }

    @Get(':id')
    getMessageById(@Param('id') id:string){
        return this.messageService.getMessageById(id);
    }

    @Post()
    createMessage(@Body() messageDto:createMessageDto){
        return this.messageService.createMessage(messageDto);
    }

    @Patch(':id')
    updateMessage(@Param('id') id:string,@Body() messageDto:UpdateMessageDto){
        return this.messageService.updateMessage(id,messageDto)
    }

    @Delete(':id')
    deleteMessage(@Param('id') id:string){
        return this.messageService.deleteMessage(id);
    }
}