import { Controller, 
   Delete,
   Get, 
   Param, 
   Patch, 
   Post } from '@nestjs/common';

@Controller("Rutas")
export class RutasController {
//endopoint
//destino de la request
//se ecribe como una funcion 
//en una clase controlador
  @Get(":id")
  consultarRutaPorId(@Param("id") id: string){
    return `aqui se podra consultar una 
            ruta por su id : ${id}`;
  }
  //se usa el id para identificar la ruta que se va a crear
  @Post()
  crearRuta(): string {
    return "aqui se podra crear una nueva ruta";
  }
  //se usa el id para identificar la ruta que se va a actualizar
  @Patch(":id")
  actualizarRuta(@Param("id") id: string){
    return `aqui se podra actualizar una ruta existente: ${id}`;
  }
  //se usa el id para identificar la ruta que se va a eliminar
  @Delete(":id")
  eliminarRuta(@Param("id") id: string){
    return `aqui se podra eliminar una ruta existente: ${id}`;
  }
}