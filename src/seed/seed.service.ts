import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { carsSeed } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { brandSeed } from './data/brands.seed';

@Injectable()
export class SeedService {

  constructor(private readonly carService: CarsService, private readonly brandService: BrandsService){
  }

  populateDb() {
    this.brandService.fillBrandsWithSeedData(brandSeed);
    this.carService.fillCarsWithSeedData(carsSeed);
    return "Ok";
  }

}
