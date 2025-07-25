import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  currentCase = {
    title: "Caso #1931 - L'Ombra del Tempio",
    description: "Un misterioso omicidio nel quartiere di Asakusa nasconde legami con il mondo demoniaco.",
    status: "IN INDAGINE"
  };
}