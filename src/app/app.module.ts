import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ReclamosComponent } from './reclamos/reclamos.component';

import { ReclamosService } from './services/reclamos.service';

@NgModule({
  declarations: [
    AppComponent,
    ReclamosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ 
    ReclamosService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
