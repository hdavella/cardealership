import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: "VW",
    //   createdAt: new Date().getTime(),
    // }
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brandDb.updatedAt= new Date().getTime();
        brandDb= { ...brandDb, ...updateBrandDto, id };
        return brandDb;
      }
      return brand;
    });
  }

  remove(id: string) {
    const brandToDelete = this.findOne(id);
        this.brands=this.brands.filter(brand=> brand !== brandToDelete );
        return;
  }

  fillBrandsWithSeedData(brands: Brand[]){

    this.brands= brands;

  }
}
