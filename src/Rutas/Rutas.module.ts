import { Module } from '@nestjs/common';
import {RutasController} from './Rutas.controller';


@Module({
  imports: [],
  controllers: [RutasController],
  providers: [],
})
export class RutasModule {}