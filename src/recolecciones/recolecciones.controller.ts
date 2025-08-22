import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecoleccionesService } from './recolecciones.service';
import { CreateRecoleccioneDto } from './dto/create-recoleccione.dto';
import { UpdateRecoleccioneDto } from './dto/update-recoleccione.dto';

@Controller('recolecciones')
export class RecoleccionesController {
  constructor(private readonly recoleccionesService: RecoleccionesService) {}

  @Post()
  create(@Body() createRecoleccioneDto: CreateRecoleccioneDto) {
    return this.recoleccionesService.create(createRecoleccioneDto);
  }

  @Get()
  findAll() {
    return this.recoleccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recoleccionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecoleccioneDto: UpdateRecoleccioneDto) {
    return this.recoleccionesService.update(+id, updateRecoleccioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recoleccionesService.remove(+id);
  }
}
