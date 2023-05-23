import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './header/topbar.component';
import { HistoryComponent } from './header/history.component';
import { LibraryButtonsComponent } from './header/library-buttons.component';
import { UserDropdownComponent } from './header/user-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HistoryComponent,
    LibraryButtonsComponent,
    UserDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
