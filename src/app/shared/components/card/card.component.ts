import { Component, input } from '@angular/core';
import { Iproduct } from '../../../core/interfaces/productServices/iproduct.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  item = input<Iproduct>();
}
