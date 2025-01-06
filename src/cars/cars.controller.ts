import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  private cars=['Toyota', 'Honda', 'VW'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id, @Res({ passthrough: true }) res){

    if(+id < this.cars.length){
      return this.cars[id];           
    }
    console.log(`El ID ${+id} esta fuera de rango`);
    res.status(HttpStatus.NOT_FOUND);
    return;
    // return {id};
    // return id;
  }
}
