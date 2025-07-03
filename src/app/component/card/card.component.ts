import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { card } from '../../models/card.model';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{

  @Input() card!: card;
  isActive: boolean = false;

  ngOnInit(): void {
    console.log(this.card.image);
  }

  slideUp(){
    this.isActive = !this.isActive;
  }
}
