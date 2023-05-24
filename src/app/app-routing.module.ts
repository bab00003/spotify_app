import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { YourLibraryComponent } from './body/your-library.component';
import { SearchPageComponent } from './body/search-page.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'your_library', component: YourLibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }