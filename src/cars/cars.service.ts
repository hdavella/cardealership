import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars=[
        {
            id:1,
            brand:"VW",
            model:"Golf"
        },
        {
            id:2,
            brand:"Toyota",
            model:"Prius"
        },
        {
            id:3,
            brand:"Ford",
            model:"Falcon"
        },
        
     ]

     findAll(){
        return this.cars;
     }

     findOneById(id:number){
        
        if(id < this.cars.length+1 && id >= 1){
             return this.cars.find(car => car.id === id);
        }
        
        console.log(`El ID ${id} esta fuera de rango`);
        return "-1";
     };
};
