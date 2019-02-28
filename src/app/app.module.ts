import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReclamosComponent } from './reclamos/reclamos.component';

import { ReclamosService } from './services/reclamos.service';

import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ReclamosComponent
  ],
  imports: [
    BrowserModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ 
    ReclamosService,
    ToastsManager
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
