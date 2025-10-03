import { Component, effect, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { ScrollSpyService } from '../../../shared/services/scroll-spy.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, NgFor, NgClass, NgTemplateOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private spy = inject(ScrollSpyService);
  mobileOpen = signal(false);

  nav = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Contato', id: 'contato' },
  ];

  activeId = this.spy.active;

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.mobileOpen.set(false);
  }
}
