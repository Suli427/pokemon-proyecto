import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { PokemonServiceService } from '../../../../services/pokemon-service.service';
import { Router } from '@angular/router';
import { pokemonModel } from '../model/pokemon.model';

@Component({
  selector: 'app-pokemon-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-proyecto.component.html',
  styleUrl: './pokemon-proyecto.component.css'
})
export class PokemonProyectoComponent implements OnInit{

  pokemons: pokemonModel[]=[];

  editingIndex: number | null = null;
  dialog: any;

  constructor(private PokemonServiceService: PokemonServiceService, private router: Router){}

  ngOnInit(): void {
    this.cargarDatos()

  }

  cargarDatos(){
    this.PokemonServiceService.getPokemons().subscribe(
      (data: pokemonModel[]) => {
        this.pokemons = data;
      }
    );
  }
  
  deletePokemon(id: number){
    this.PokemonServiceService.deletePokemon(id).subscribe(response => {
      if(response){
        this.cargarDatos()
      }
    
    });
  }

  viewPokemon(id: number){
    this.router.navigate(['/pokemon', id]);
  }
}
