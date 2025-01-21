import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app-routing.module';
import { DemoAngularMaterialModule } from './app/DemoAngularMaterialModule';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    DemoAngularMaterialModule, // Add Material Module here
  ],
}).catch((err) => console.error(err));




// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { routes } from './app/app-routing.module'; // Adjust based on your routes file

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes), // Provide your routes directly
//     provideAnimations(),  // Add animations support if needed
//   ],
// }).catch((err) => console.error(err));





// Original code
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
