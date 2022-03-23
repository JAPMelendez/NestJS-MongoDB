import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HumanController } from "./humans.controller";
import { HumanService } from "./humans.service";
import { Human, HumanSchema } from "./schema/human.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Human.name, schema: HumanSchema}])],
    //Forma2
    //imports: [MongooseModule.forFeature([{name: 'human', schema: HumanSchema}])],
    controllers: [HumanController],
    providers: [HumanService],
})

export class HumansModule{}