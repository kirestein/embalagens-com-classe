import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = ['Ser parceiro','Estar presente','Dar soluções','Auxiliar','Ajudar','Acompanhar'];
}
