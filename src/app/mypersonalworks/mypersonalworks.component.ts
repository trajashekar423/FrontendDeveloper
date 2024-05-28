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
    { title: 'Nextjs/Redux', content: 'My first Nextjs Project with Reduxtoolkit store demo',url:"https://nextjsreduxstore-demo.vercel.app/",logo:"assets/nextjslogo.png" },
    { title: 'Nextjs/Redux', content: 'My Demoproject Nextjs Project with Reduxtoolkit store demo',url:"https://nextjswithredux-fulltemplate.vercel.app/",logo:"assets/nextjslogo.png" },
    { title: 'Card 3', content: 'Content for Card 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
