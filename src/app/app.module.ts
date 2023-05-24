import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './header/topbar.component';
import { HistoryComponent } from './header/history.component';
import { LibraryButtonsComponent } from './header/library-buttons.component';
import { UserDropdownComponent } from './header/user-dropdown.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarButtonsComponent } from './sidebar/sidebar-buttons.component';
import { SidebarPlaylistButtonsComponent } from './sidebar/sidebar-playlist-buttons.component';
import { BodyComponent } from './body/body.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { YourLibraryComponent } from './body/your-library.component';
import { SearchPageComponent } from './body/search-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HistoryComponent,
    LibraryButtonsComponent,
    UserDropdownComponent,
    SidebarComponent,
    SidebarButtonsComponent,
    SidebarPlaylistButtonsComponent,
    BodyComponent,
    LayoutMainComponent,
    YourLibraryComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
