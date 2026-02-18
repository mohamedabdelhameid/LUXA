import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isDropdownOpen = false;

  /**
   * Controls the mobile nav menu.
   * On desktop (md+) Tailwind's `md:flex` keeps it always visible,
   * so this flag only matters on small screens.
   */
  isMenuOpen = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /** Close the dropdown when user clicks anywhere outside the navbar */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInsideNav = (event.target as HTMLElement).closest('nav');
    if (!clickedInsideNav) {
      this.isDropdownOpen = false;
    }
  }
}
