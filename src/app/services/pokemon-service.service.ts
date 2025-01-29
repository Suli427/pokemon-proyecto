import { Injectable } from '@angular/core';
import { pokemonModel } from '../components/main/pokemon/model/pokemon.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private baseUrl = 'https://55d7-79-151-55-38.ngrok-free.app:80/api/alumno1/alumnos.php?table='; // Base URL

  constructor(private http: HttpClient, private router: Router) { }
  
  getPokemons(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addPokemon(pokemon: pokemonModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl, pokemon, { headers });
  }

  deletePokemon(pokemonId: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { pokemon_id: pokemonId };
    return this.http.delete(this.baseUrl, { headers, body });
  }
  editPokemon(updatedPokemon: pokemonModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseUrl}/${updatedPokemon.id}`, updatedPokemon, { headers });
  }
  getItemById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addPokemonRandom(id: number){
    return this.http.get(`${this.baseUrl}pokemons/${id}`);
  }

  navigateTo(id: number, url: string){
    if(id == -1)
      this.router.navigate([url]);
    else
      this.router.navigate([url, id]);
  }

  /*pokemons = [
    {id: 1, name: 'Charizard', type:'Fuego', item:'Charizardita Y'},
    {id: 2, name: 'Blastoise', type:'Agua', item:'Blastoisita'},
    {id: 3, name: 'Venusaur', type:'Planta', item:'Venusaurita'}
  ];

  getItemById(id: number): any {
    return this.pokemons.find(pokemons => pokemons.id === id);
  }

  getPokemons(){
    return this.pokemons;
  }

  addPokemon(name: string, type: string, item: string){
    const newId = this.pokemons.length > 0 
    ? Math.max(...this.pokemons.map(pokemon => pokemon.id)) + 1 
    : 1;

    const pokemon = {id: newId, name, type, item};
    
    this.pokemons.push(pokemon);
    this.saveToLocalStorage();
  }

  deletePokemon(index: number){
    this.pokemons.splice(index, 1);
    this.saveToLocalStorage();
  }

  editPokemon(index: number, name: string, type: string, item: string){
    this.pokemons[index-1].name = name;
    this.pokemons[index-1].type = type;
    this.pokemons[index-1].item = item;
    this.saveToLocalStorage();
  }

  navigateTo(id: number, url: string){
    if(id == -1)
      this.router.navigate([url]);
    else
      this.router.navigate([url, id]);
  }

  // Método para guardar la lista de Digimon en localStorage como un string JSON.
  private saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.pokemons)); // Convierte el arreglo a JSON y lo guarda
  }


  // Método que verifica si localStorage está disponible en el entorno actual
  private isLocalStorageAvailable(): boolean {
    try {
      return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    } catch (e) {
      return false;
    }
  }*/

}
