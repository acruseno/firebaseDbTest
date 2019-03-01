import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Reclamo } from '../models/reclamo';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

  reclamoList: AngularFireList<any>;

  constructor(private _angularFireService) { 

  }

  //Obtener todos los reclamos
  getReclamos(){

  }

  //retorna el reclamo solicitado
  getReclamo(_id: any){

  }

  //agrega un reclamo a la BD
  addReclamo(_reclamo: Reclamo){

  }

  //actualiza un registo de la base de datos
  updateReclamo(_id: any, _reclamo: Reclamo){

  }

  //elimina el registro especificado de la base de datos
  deleteReclamo(_id: any){

  }
}
