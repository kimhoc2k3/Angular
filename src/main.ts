// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { provideRouter } from '@angular/router';
// import routeConfig from './app/routes';
// import { AppComponent } from './app/app.component';
// import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
// import { AppModule } from './app/app.module';

import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';




bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));


