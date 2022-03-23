import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateHumanDto } from "./dto/create-humans.dto";
import { HumanService } from "./humans.service";
import { Human } from "./schema/human.schema";

@Controller('human')
export class HumanController{
    constructor(private readonly humanService: HumanService){}
    
    @Post()
    async create(@Body() createHumanDto: CreateHumanDto ){
        await this.humanService.create(createHumanDto);
    }

    @Get()
    async findAll(): Promise<Human[]>{
        return this.humanService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Human>{
        return this.humanService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.humanService.delete(id);
    }
}