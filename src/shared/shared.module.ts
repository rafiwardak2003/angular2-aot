import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// This should be in another file but for this project here it does the job
import 'zone.js';
import 'reflect-metadata';

// This is just a shared module to share dependencies
@NgModule({
    exports: [
        BrowserModule,
        FormsModule
    ]
})

export class SharedModule {}