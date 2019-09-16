import { Injectable } from '@nestjs/common';
import { Mensaje } from './entities/mensaje.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Injectable()
export class MensajesService {
  constructor(
    @InjectRepository(Mensaje)
    private readonly mensajeRepository: Repository<Mensaje>,
  ) {}

  async getAll(){
      return await this.mensajeRepository.find();


  }
  async createmensaje(mensajeNuevo: CreateMensajeDto){
      const nuevo = new Mensaje();
      nuevo.mensaje = mensajeNuevo.mensaje;
      nuevo.nick = mensajeNuevo.nick;

  return this.mensajeRepository.save(nuevo); 

}

async updateMensaje(idmensaje: number, mensajeActuaaluizar: CreateMensajeDto){
    const mensajeUpdate = await this.mensajeRepository.findOne(idmensaje);
    mensajeUpdate.nick = mensajeActuaaluizar.nick;
    mensajeUpdate.mensaje = mensajeActuaaluizar.mensaje;

    return await this.mensajeRepository.save(mensajeUpdate); 
}

async deleteMensaje(idmensaje: number){

    return await this.mensajeRepository.delete(idmensaje); 
}
}
