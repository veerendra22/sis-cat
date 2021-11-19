import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './secure/home/home.component';
import { SmyleAdmComponent } from './secure/smyle-adm/smyle-adm.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SmyleAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports:[MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
