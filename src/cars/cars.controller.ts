import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  private cars=['Toyota', 'Honda', 'VW'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id){

    // return {id};
    return id;
  }
}
