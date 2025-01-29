import { Routes } from '@angular/router';
import { PokemonProyectoComponent } from './components/main/pokemon/pokemon-proyecto/pokemon-proyecto.component';
import { PokemonAddComponent } from './components/main/pokemon/pokemon-add/pokemon-add.component';
import { PokemonDetailComponent } from './components/main/pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonEditComponent } from './components/main/pokemon/pokemon-edit/pokemon-edit.component';
import { PokemonCatchComponent } from './components/main/pokemon/pokemon-catch/pokemon-catch.component';

export const routes: Routes = [
    { path: 'list', component: PokemonProyectoComponent },  //Redirige al componente de la lista
    { path: 'add', component: PokemonAddComponent },    //Redirige al componente de añadir
    { path: 'catch', component: PokemonCatchComponent },    //Redirge al componente de captura random
    { path: 'pokemon/:id', component: PokemonDetailComponent },     //Redirige al componente de detalles
    { path: 'edit-pokemon/:id', component: PokemonEditComponent },  //Redirige al componente de editar
    { path: '', redirectTo: '/list', pathMatch: 'full' },   //Redirige si no pones nada al componente de la lista
    { path: '**', redirectTo: '/list'}  //Redirige si pones algo inventado al componente de la lista
];
