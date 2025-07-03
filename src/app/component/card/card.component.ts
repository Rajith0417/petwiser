import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { card } from '../../models/card.model';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() card!: card;
  isActive: boolean = false;

  slideUp(){
    this.isActive = !this.isActive;
  }
}
