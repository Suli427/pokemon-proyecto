import { Injectable } from '@angular/core';
import { pokemonModel } from '../components/main/pokemon/model/pokemon.model';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private baseUrl = 'https://c74f4156107e.ngrok.app/api/marc/api.php?table=pokemons'; // Base URL

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la API:', error);
    let errorMessage = 'Ocurrió un error inesperado';

    if (error.status === 404) {
      errorMessage = 'No se encontró la API. Verifica la URL.';
    } else if (error.status === 500) {
      errorMessage = 'Error en el servidor. Revisa la API.';
    } else if (error.error instanceof ErrorEvent) {
      errorMessage = `Error de red: ${error.error.message}`;
    } else {
      errorMessage = `Código de error: ${error.status}, Mensaje: ${error.message}`;
    }

    return throwError(() => new Error(errorMessage));
  }

  constructor(private http: HttpClient, private router: Router) { }
  
  getPokemons(): Observable<pokemonModel[]> { 
    return this.http.get<pokemonModel[]>(`${this.baseUrl}`).pipe(catchError(this.handleError));
  }

  addPokemon(pokemon: pokemonModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl, pokemon, { headers });
  }

  deletePokemon(pokemonId: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.request('DELETE', `${this.baseUrl}&id=${pokemonId}`, { headers  });
    return this.http.delete(`${this.baseUrl}&id=${pokemonId}`, { headers }).pipe(
      (res) => { console.log("Pokemon eliminado con exito"); return res},
      catchError(this.handleError)
    );

  }
  editPokemon(updatedPokemon: pokemonModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseUrl}&id=${updatedPokemon.id_pokemon}`, updatedPokemon, { headers });
  }
  getItemById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}&id=${id}`);
  }

  addPokemonRandom(id: number){
    return this.http.get(`${this.baseUrl}&id=${id}`);
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
