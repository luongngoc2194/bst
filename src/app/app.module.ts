import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BstOneComponent} from './component/bst-one/bst-one.component';
import {BstTwoComponent} from './component/bst-two/bst-two.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoSanitizePipe} from './until/nosanitizerpipe';
import {MatTabsModule} from '@angular/material/tabs';
import { DialogComponent } from './component/dialog/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogPopupComponent } from './component/dialog/dialog/dialog-popup/dialog-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    BstOneComponent,
    BstTwoComponent,
    NoSanitizePipe,
    DialogComponent,
    DialogPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatButtonModule, MatButtonToggleModule, BrowserAnimationsModule, MatTabsModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
