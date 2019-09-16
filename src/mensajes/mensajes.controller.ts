import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
import { Mensaje } from './entities/mensaje.entity';
import { response } from 'express';

@Controller('mensajes')
export class MensajesController {
    constructor(private mensajesService: MensajesService) {

    }
    @Post()
    create(@Body() createmensajeDto: CreateMensajeDto, @Res() response) {
        this.mensajesService.createmensaje(createmensajeDto).then(Mensaje => {
            response.status(HttpStatus.CREATED).json(Mensaje);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al crear el mensaje' });

        });

    }

    @Get()
    getAll(@Res() response) {
        this.mensajesService.getAll().then(mensajelist => {
            response.status(HttpStatus.OK).json(mensajelist);


        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al obtener los mensajes' });

        });
    }

    @Put(':sid')
    update(@Body() updateMensajeDto: CreateMensajeDto, @Res() response, @Param('id') idmensaje) {
        this.mensajesService.updateMensaje(idmensaje, updateMensajeDto).then(Mensaje => {
            response.status(HttpStatus.CREATED).json(Mensaje);
        }).catch(() => {
            response.status(HttpStatus.OK).json({ mensaje: 'error en la edicion mensaje' });

        });

    }
    @Delete(':id')
    delete(@Res() response, @Param('id') idmensaje) {
        this.mensajesService.deleteMensaje(idmensaje).then(res => {
            response.status(HttpStatus.CREATED).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la eliminacion del mensaje' });

        });
    }

}
