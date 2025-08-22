import { Injectable } from '@nestjs/common';
import { CreateRecoleccioneDto } from './dto/create-recoleccione.dto';
import { UpdateRecoleccioneDto } from './dto/update-recoleccione.dto';
import { PrismaService } from 'src/pri/prisma.service';

@Injectable()
export class RecoleccionesService {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  create(createRecoleccioneDto: CreateRecoleccioneDto) {
    return 'This action adds a new recoleccione';
  }

  findAll() {
    return this.prisma.recolecciones.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} recoleccione`;
  }

  update(id: number, updateRecoleccioneDto: UpdateRecoleccioneDto) {
    return `This action updates a #${id} recoleccione`;
  }

  remove(id: number) {
    return `This action removes a #${id} recoleccione`;
  }
}
