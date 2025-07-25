import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { TrailerComponent } from "../../components/trailer/trailer.component";
import { CharactersComponent } from "../../components/characters/characters.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, TrailerComponent, CharactersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
