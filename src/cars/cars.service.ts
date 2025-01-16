import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
        
        const car=this.cars.find(car => car.id === id);
        if(!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car

     };

     create(createCarDto: CreateCarDto){
        const newCar :Car ={
            id:uuid(),
            ...createCarDto,
        };

        this.cars.push(newCar);
        return newCar;
     };

     update(updateCarDto: UpdateCarDto){

        let carDb = this.findOneById(updateCarDto.id);

     };
};
