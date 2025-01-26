import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DemoAngularMaterialModule } from '../../DemoAngularMaterialModule';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoAngularMaterialModule,
   
  ],

   providers: [
      provideHttpClient(withInterceptorsFromDi())  // Make sure this is in the providers array
    ],

})
export class AdminModule { }
