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
import { PlaylistCardComponent } from './body/playlist-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { ContentTypeCardComponent } from './body/content-type-card.component';
import { ForYouCardComponent } from './body/for-you-card.component';
import { EditUserInfoComponent } from './body/edit-user-info.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';

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
    SearchPageComponent,
    PlaylistCardComponent,
    UserInfoComponent,
    ContentTypeCardComponent,
    ForYouCardComponent,
    EditUserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,'spotify-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
