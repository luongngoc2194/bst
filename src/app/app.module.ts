import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BstOneComponent} from './component/bst-one/bst-one.component';
import {BstTwoComponent} from './component/bst-two/bst-two.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoSanitizePipe} from './until/nosanitizerpipe';
import {MatTabsModule} from '@angular/material/tabs';
import {DialogComponent} from './component/dialog/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogPopupComponent} from './component/dialog/dialog/dialog-popup/dialog-popup.component';
import {ShareService} from './service/share.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

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
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule, MatInputModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
