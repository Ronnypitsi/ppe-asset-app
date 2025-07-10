import { Component } from '@angular/core';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent {
  mobileMenuOpen = false;
  isDesktop = true;
  isDarkMode = false;

  ngOnInit(): void {
    const saved = localStorage.getItem('isDarkMode') === 'true';
    this.isDarkMode = saved;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
