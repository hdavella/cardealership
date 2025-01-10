import { Controller, Get, Param, Res, HttpStatus, ParseIntPipe, NotFoundException, Post, Body, Delete, Patch, ParseUUIDPipe, } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carService:CarsService
  ){};

  @Get()
  getAllCars() {
    return this.carService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe, ) id:string , /*@Res() res*/){

    return this.carService.findOneById(id);

    // res.status(HttpStatus.NOT_FOUND); funciona igual que el de abajo, sin arrojar la excepcion
    //throw new NotFoundException(`Item ${id} not found`);
  }

  @Post()
  newCar(@Body() body:any, ){
    return body;
  }

  @Patch(':id')
  updateCar(
    @Body() body:any,
    @Param('id', ParseUUIDPipe, ) id:string,
  ){
    return body;
  }

  @Delete(':id')
  delCar(@Param('id') id:string, ){
    return {
      method: "delete",
      id,
    };
  }
}
