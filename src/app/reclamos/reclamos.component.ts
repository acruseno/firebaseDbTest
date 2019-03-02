import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReclamosService } from '../services/reclamos.service';
import { Reclamo } from '../models/reclamo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.css']
})
export class ReclamosComponent implements OnInit {

  reclamosLista: Reclamo[];
  constructor(private toast: ToastrService, private _reclamoService: ReclamosService ) {
   }

  ngOnInit() {
    this.obtenerInformacion();
  }

  onSubmit(_formulario){
    let reclamo = {
      titulo: _formulario.value._titulo,
      texto: _formulario.value._texto,
      locacion: _formulario.value._locacion
    }
    // console.log(_formulario.value);
    this._reclamoService.addReclamo(reclamo);
    this.toast.success("Se ha enviado el formulario!", "nose para que es esto");
  }

  resetearForm(_formulario: NgForm){
    console.log("limpiando formulario");
  }

  obtenerInformacion(){
    console.log("obteniendo informacion");
    this._reclamoService.getReclamos().subscribe( 
      res => {
        this.reclamosLista = [];
        res.forEach( 
          elemento => {
            let registro = elemento.payload.doc.data();
            this.reclamosLista.push({
            $key: elemento.payload.doc.id,
            data: {
              titulo: registro["titulo"],
              texto: registro["texto"],
              locacion: registro["locacion"]
            }
          });
        });
      },
      error => {
        console.log(error);
      }
    );

    // var contenido = this._reclamoService.getReclamos();
    // contenido.snapshotChanges().subscribe(
    //   res => {
    //     this.reclamosLista = [];
    //     res.forEach(
    //       elemento => {
    //         let registro = elemento.payload.toJSON();
    //         registro["$key"] = elemento.key;

    //         this.reclamosLista.push(registro as Reclamo);
    //       });
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }

  editar(item) {
    console.log("edicion");
  }

  eliminar(item) {
    console.log("eliminar");
  }

  agregar(item) {
    console.log("agregar");
  }
}
