import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {provideRouter} from '@angular/router';
import { routes } from './app/app.routes';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideProtractorTestingSupport(), 
    provideRouter(routes), 
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
  ],
})
  .catch((err) => console.error(err));
