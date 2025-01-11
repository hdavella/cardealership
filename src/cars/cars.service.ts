import { Injectable } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[]=[
        {
            id:uuid(),
            brand:"VW",
            model:"Golf",
        },
        {
            id:uuid(),
            brand:"Toyota",
            model:"Prius",
        },
        {
            id:uuid(),
            brand:"Ford",
            model:"Falcon",
        },
        
     ]

     findAll(){
        return this.cars;
     };

     findOneById(id:string){
        
             return this.cars.find(car => car.id === id);

     };

     create(createCarDto: CreateCarDto){
        const newCar :Car ={
            id:uuid(),
            ...createCarDto,
        };

        this.cars.push(newCar);
        return newCar;
     };
};
