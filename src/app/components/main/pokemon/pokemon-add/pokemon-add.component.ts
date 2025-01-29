import { Component } from '@angular/core';
import { PokemonServiceService } from '../../../../services/pokemon-service.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { pokemonModel } from '../model/pokemon.model';


@Component({
  selector: 'app-pokemon-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pokemon-add.component.html',
  styleUrl: './pokemon-add.component.css'
})
export class PokemonAddComponent {
  public form!: FormGroup;
  tiposPokemon: string [] = ['Fuego', 'Agua', 'Planta', 'Normal', 'Eléctrico', 'Hielo', 'Lucha', 'Veneno', 'Tierra', 'Volador', 'Psíquico', 'Bicho', 'Roca', 'Fantasma', 'Dragón', 'Siniestro', 'Acero', 'Hada'];
  
  constructor(private PokemonServiceService: PokemonServiceService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      item: ['', [
        Validators.required
      ]]
    });
  }

  addPokemon(){
    this.PokemonServiceService.addPokemon(this.form.value);
  }


}
