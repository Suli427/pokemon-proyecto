import { Component } from '@angular/core';
import { PokemonServiceService } from '../../../../services/pokemon-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-catch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-catch.component.html',
  styleUrl: './pokemon-catch.component.css'
})
export class PokemonCatchComponent {

  constructor(private PokemonServiceService: PokemonServiceService, private router: Router){}

  showModal: boolean = false;
  modalMessage: string = '';

  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  catchPokemon(){
    const id = this.generateRandomNumber(0,22);

    const nombrePokemon = this.PokemonServiceService.addPokemonRandom(id);
    this.modalMessage = '¡Enhorabuena, has capturado un ' + nombrePokemon + '!';
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false; // Oculta el modal
  }

  goBack(){
    this.router.navigate(['/list']);
  }
}
