import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Reclamo } from '../models/reclamo';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {
  selectedIssue: Reclamo = new Reclamo();
  reclamoList: AngularFirestoreCollection<any>;

  constructor(private _afs: AngularFirestore) { 

  }

  //Obtener todos los reclamos
  getReclamos(){
    return this._afs.collection('reclamos').snapshotChanges();
  }

  // //retorna el reclamo solicitado
  // getReclamo(_id: any){
    
  // }

  //agrega un reclamo a la BD
  addReclamo(reclamo: {
    titulo: string,
    texto: string,
    locacion: string
  }){
    // this.reclamoList.push({
    //   titulo: _reclamo.titulo,
    //   texto: _reclamo.texto,
    //   categoria: _reclamo.categoria,
    //   locacion: _reclamo.locacion
    // });
    this._afs.collection("reclamos").add(reclamo);
  }

  //actualiza un registo de la base de datos
  updateReclamo(_id: string, _reclamo: Reclamo){
    // this.reclamoList.update(_id, {
    //   titulo: _reclamo.titulo,
    //   texto: _reclamo.texto,
    //   categoria: _reclamo.categoria,
    //   locacion: _reclamo.locacion
    // })
  }

  //elimina el registro especificado de la base de datos
  deleteReclamo(_id: string){
    // this.reclamoList.remove(_id);
  }
}
