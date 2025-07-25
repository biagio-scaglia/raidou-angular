import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  standalone: true,
  templateUrl: './trailer.component.html'
})
export class TrailerComponent {
  title = 'Raidou Remastered: The Mystery of the Soulless Army';
  releaseDate = '19 giugno 2025';
  platforms = [
    'PlayStation 5',
    'PlayStation 4',
    'Nintendo Switch 2',
    'Nintendo Switch',
    'Windows (Steam)',
    'Xbox Series X|S'
  ];

  trailerUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const rawUrl = 'https://www.youtube.com/embed/fI9gpt3qZ8s?si=WMhOXFMCJIYZBfDg';
    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }
}
