import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Reclamo } from '../models/reclamo';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {
  selectedIssue: Reclamo = new Reclamo();
  reclamoList: AngularFireList<any>;

  constructor(private _angularFireDatabase: AngularFireDatabase) { 

  }

  //Obtener todos los reclamos
  getReclamos(){
    return this.reclamoList = this._angularFireDatabase.list("reclamos");
  }

  // //retorna el reclamo solicitado
  // getReclamo(_id: any){
    
  // }

  //agrega un reclamo a la BD
  addReclamo(_reclamo: Reclamo){
    this.reclamoList.push({
      titulo: _reclamo.titulo,
      texto: _reclamo.texto,
      categoria: _reclamo.categoria,
      locacion: _reclamo.locacion
    });
  }

  //actualiza un registo de la base de datos
  updateReclamo(_id: any, _reclamo: Reclamo){
    this.reclamoList.update(_id, {
      titulo: _reclamo.titulo,
      texto: _reclamo.texto,
      categoria: _reclamo.categoria,
      locacion: _reclamo.locacion
    })
  }

  //elimina el registro especificado de la base de datos
  deleteReclamo(_id: any){
    this.reclamoList.remove(_id);
  }
}
