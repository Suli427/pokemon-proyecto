import { Component } from '@angular/core';
import { PokemonServiceService } from '../../../../services/pokemon-service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  pokemon: any;

  constructor(private route: ActivatedRoute, private PokemonServiceService: PokemonServiceService, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Obtener el id de la URL
    this.pokemon = this.PokemonServiceService.getItemById(id); // Obtener el elemento
  }

  viewEditPokemon(id: number){
    this.router.navigate(['/edit-pokemon', id]);
  }
}
