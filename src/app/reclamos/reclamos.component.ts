import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReclamosService } from '../services/reclamos.service';
@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.css']
})
export class ReclamosComponent implements OnInit {

  constructor(private toast: ToastrService, private _reclamoService: ReclamosService ) {
   }

  ngOnInit() {
    this.obtenerInformacion();
  }

  onSubmit(_formulario){
    console.log("enviando Formulario")
  }

  resetearForm(_formulario){
    console.log("limpiando formulario")
  }

  obtenerInformacion(){
    console.log("obteniendo informacion")
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
