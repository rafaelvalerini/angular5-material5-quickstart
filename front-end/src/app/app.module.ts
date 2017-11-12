import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatIconModule} from '@angular/material';




import 'hammerjs';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
