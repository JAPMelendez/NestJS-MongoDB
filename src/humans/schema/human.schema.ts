import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type HumanDocument = Human & Document;

@Schema()
export class Human{
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    gender: string;
}

export const HumanSchema = SchemaFactory.createForClass(Human);