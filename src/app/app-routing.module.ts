import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './components/image/character.component';
import { CharactersComponent } from './components/images/characters.component';


const routes: Routes = [
  { path: '', component: CharactersComponent},
  { path: 'character/:id', component: CharacterComponent},
  { path: '**', component: CharactersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
