import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PokemonProyectoComponent } from './components/main/pokemon/pokemon-proyecto/pokemon-proyecto.component';
import { PokemonAddComponent } from "./components/main/pokemon/pokemon-add/pokemon-add.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonProyectoComponent, PokemonAddComponent, RouterLink, HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejMarc';
}
