import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navItems = [
    { path: 'home', name: 'Agenzia Investigativa di Tokyo', icon: 'fa-building' },
    { path: '/casi', name: 'Fascicoli dei Casi', icon: 'fa-file-alt' },
    { path: '/demoni', name: 'Enciclopedia Demoniaca', icon: 'fa-book-dead' },
    { path: '/contatti', name: 'Contatti', icon: 'fa-envelope' }
  ];

  isMenuOpen = false;
  currentYear = new Date().getFullYear();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
