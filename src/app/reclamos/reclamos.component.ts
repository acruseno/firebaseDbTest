import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReclamosService } from '../services/reclamos.service';
@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.css']
})
export class ReclamosComponent implements OnInit {

  constructor(private toast: ToastrService, _reclamoService: ReclamosService ) { }

  ngOnInit() {
  }

  successAccion(){
    this.toast.success("Al fin CTM!");
  }

}
