import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';

@NgModule({
    declarations: [], // No standalone components here
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        DemoAngularMaterialModule, // Other modules
    ],
    providers: [],
    bootstrap: [], // Standalone components are bootstrapped directly
})
export class AppModule {}


// Original code
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppRoutingModule } from './app-routing.module';

// import { AppComponent } from './app.component';
// import { LoginComponent } from './auth/components/login/login.component';
// import { SignupComponent } from './auth/components/signup/signup.component';
// import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';

// @NgModule({
//     declarations: [
//         AppComponent,
//         LoginComponent,
//         SignupComponent,
//     ],
//     imports: [
//         BrowserModule,
//         BrowserAnimationsModule,
//         AppRoutingModule,
//         DemoAngularMaterialModule,
//     ],
//     providers: [],
//     bootstrap: [AppComponent],
// })
// export class AppModule {}
