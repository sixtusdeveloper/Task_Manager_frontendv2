import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DemoAngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())  // Make sure this is in the providers array
  ],
  bootstrap: [],
})
export class AppModule {}





// PREVIOUS consumerDestroy, GETING A STRIKE ERROR ON THE HTTPCLIENTMODULE ABOUT IT DEPLICATION DUE TO IT OUTDATED VERSION. Swictching to the new version of the HttpClient module which provideHttpClient method to avoid the error

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppRoutingModule } from './app-routing.module';
// import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';  // Required for HttpClient
// // Angular Material Modules
// import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';

// @NgModule({
//     declarations: [], // No standalone components here
//     imports: [
//         BrowserModule,
//         BrowserAnimationsModule,
//         AppRoutingModule,
//         DemoAngularMaterialModule, // Other modules
//         ReactiveFormsModule,
//         FormsModule,
//         MatCardModule,  // Required for mat-card
//         MatIconModule,  // Required for mat-icon
//         HttpClientModule // Required for HttpClient
        
//     ],
//     providers: [],
//     bootstrap: [], // Standalone components are bootstrapped directly
// })
// export class AppModule {}

