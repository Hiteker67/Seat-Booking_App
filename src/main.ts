import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Enable production mode if needed
enableProdMode();

// Bootstrap the AppComponent
bootstrapApplication(AppComponent).catch((err) => console.error(err));
