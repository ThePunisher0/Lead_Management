import { Component, Input } from '@angular/core';
import { CardItem } from '../../services/data.servive';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
   @Input() item!: CardItem;

}
