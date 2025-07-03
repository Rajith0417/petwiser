import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./component/card/card.component";
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CardComponent, DragDropModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'petwiser';
  cards = [
        { title: 'Card 1', email: 'email1@email.com', image: '1.png', icon: 'brush' },
        { title: 'Card 2', email: 'email2@email.com', image: '2.png', icon: 'star' },
        { title: 'Card 3', email: 'email3@email.com', image: '3.png', icon: 'spa' },
        { title: 'Card 4', email: 'email4@email.com', image: '4.png', icon: 'fence' },
        { title: 'Card 5', email: 'email5@email.com', image: '5.png', icon: 'settings' },
        { title: 'Card 6', email: 'email6@email.com', image: '6.png', icon: 'backup' },
        { title: 'Card 7', email: 'email7@email.com', image: '7.png', icon: 'traffic' },
        { title: 'Card 8', email: 'email8@email.com', image: '1.png', icon: 'sunny' }
      ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }
}
