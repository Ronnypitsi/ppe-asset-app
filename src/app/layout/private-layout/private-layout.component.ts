import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: ['./private-layout.component.scss']
})
export class PrivateLayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isDesktop = true;
  isDarkMode = false;

  ngOnInit(): void {
    this.checkScreenSize();
    const saved = localStorage.getItem('isDarkMode') === 'true';
    this.isDarkMode = saved;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isDesktop = window.innerWidth > 768;
  }

  closeOnMobile() {
    if (!this.isDesktop && this.sidenav) {
      this.sidenav.close();
    }
  }

  
  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
    localStorage.setItem('isDarkMode', String(this.isDarkMode));
  }
  logout() {
    localStorage.removeItem('token');
    location.href = '/login';
  location.href = '/login';
  }
}
