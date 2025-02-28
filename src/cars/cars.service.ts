import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto, } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[]=[
        
     ]

     findAll(){
        return this.cars;
     };

     findOneById(id:string){        
        const car=this.cars.find(car => car.id === id);
        if(!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car;
     };

     create(createCarDto: CreateCarDto){
        const newCar :Car ={
            id:uuid(),
            ...createCarDto,
        };
        this.cars.push(newCar);
        return newCar;
     };

     update(id: string, updateCarDto: UpdateCarDto){
        let carDb = this.findOneById(id);
        if(carDb.id !== updateCarDto.id) throw new BadRequestException();
        this.cars=this.cars.map(car=>{
                if(car.id === carDb.id){
                    carDb={...carDb, ...updateCarDto, id};
                    return carDb;
                }
                return car;                
            })
            return carDb;
     };

     delete(id:string){
        const carToDelete = this.findOneById(id);
        this.cars=this.cars.filter(car=> car != carToDelete );
        return;
     }

     fillCarsWithSeedData(cars: Car[]){
     
         this.cars= cars;
     
       }
};