import { Car } from 'src/cars/interfaces/car.interface';
import {v4 as uuid} from 'uuid';

export const carsSeed: Car[]=[
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
