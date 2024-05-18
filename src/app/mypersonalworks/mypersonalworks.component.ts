import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mypersonalworks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mypersonalworks.component.html',
  styleUrl: './mypersonalworks.component.css'
})
export class MypersonalworksComponent {

  cards = [
    { title: 'Nextjs/Redux', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' },
    { title: 'Card 3', content: 'Content for Card 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
