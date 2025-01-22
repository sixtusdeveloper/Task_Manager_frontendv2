import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app-routing.module';
import { DemoAngularMaterialModule } from './app/DemoAngularMaterialModule';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    DemoAngularMaterialModule, // Add Material Module here
  ],
}).catch((err) => console.error(err));



