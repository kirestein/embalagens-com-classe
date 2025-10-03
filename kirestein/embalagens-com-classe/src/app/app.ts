import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ScrollSpyService } from './shared/services/scroll-spy.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroComponent, AboutComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private spy = inject(ScrollSpyService);

  ngOnInit(): void {
    // Defer initialization to ensure elements exist
    setTimeout(() => this.spy.init(['home','sobre','contato']), 0);
  }
}
