import { Module } from '@nestjs/common';
import { RecoleccionesService } from './recolecciones.service';
import { RecoleccionesController } from './recolecciones.controller';
import { PriModule } from 'src/pri/pri.module';

@Module({
  imports: [PriModule],
  controllers: [RecoleccionesController],
  providers: [RecoleccionesService],
})
export class RecoleccionesModule {}

