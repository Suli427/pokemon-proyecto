import { Component } from '@angular/core';
import { PokemonServiceService } from '../../../../services/pokemon-service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pokemon-edit.component.html',
  styleUrl: './pokemon-edit.component.css'
})
export class PokemonEditComponent {
  public form!: FormGroup;
  pokemon: any;
  tiposPokemon: string [] = ['Fuego', 'Agua', 'Planta', 'Normal', 'Eléctrico', 'Hielo', 'Lucha', 'Veneno', 'Tierra', 'Volador', 'Psíquico', 'Bicho', 'Roca', 'Fantasma', 'Dragón', 'Siniestro', 'Acero', 'Hada'];
  
  constructor(private route: ActivatedRoute, private PokemonServiceService: PokemonServiceService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Obtener el id de la URL
    console.log("id:", id);
    this.pokemon = this.PokemonServiceService.getItemById(id); // Obtener el elemento
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      item: ['', [
        Validators.required
      ]]
    });
  }

  editPokemon(){
    console.log(this.form.value);
  }

  navigateTo(id: number, url: string){
    this.PokemonServiceService.navigateTo(id, url);
  }
}
