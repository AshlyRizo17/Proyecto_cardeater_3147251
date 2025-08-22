import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RutasController } from './Rutas/Rutas.controller';
import { RutasModule } from './Rutas/Rutas.module';
import { RecoleccionesModule } from './recolecciones/recolecciones.module';
import { PriModule } from './pri/pri.module';

@Module({
  imports: [RutasModule, RecoleccionesModule, PriModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
