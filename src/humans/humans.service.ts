import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateHumanDto } from "./dto/create-humans.dto";
import { Human, HumanDocument } from "./schema/human.schema";


@Injectable()
export class HumanService{
    constructor(
        @InjectModel(Human.name) private readonly humanModel: Model<HumanDocument>){}
        
        //Forma 2
        //@InjectModel('human') private readonly humanModel: Model<HumanDocument>){}
        async create(createHumanDto: CreateHumanDto): Promise<Human>{
            const createdHuman = await this.humanModel.create(createHumanDto);
            return createdHuman;
        }

        async findAll(): Promise<Human[]>{
            return this.humanModel.find().exec();
        }

        async findOne(id: string): Promise<Human>{
            return this.humanModel.findOne({ _id: id}).exec();
        }

        async delete(id: string){
            const deleteHuman = await this.humanModel
            .findByIdAndRemove({ _id: id})
            .exec();
            return deleteHuman;
        }
    }