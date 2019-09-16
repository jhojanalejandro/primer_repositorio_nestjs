import { Mensaje } from './entities/mensaje.entity';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
export declare class MensajesService {
    private readonly mensajeRepository;
    constructor(mensajeRepository: Repository<Mensaje>);
    getAll(): Promise<Mensaje[]>;
    createmensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje>;
    updateMensaje(idmensaje: number, mensajeActuaaluizar: CreateMensajeDto): Promise<Mensaje>;
    deleteMensaje(idmensaje: number): Promise<import("typeorm").DeleteResult>;
}
