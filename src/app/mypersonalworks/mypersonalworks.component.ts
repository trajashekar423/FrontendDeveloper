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
    { title: 'Nextjs/Redux', content: 'My Demo project Nextjs with Reduxtoolkit store',url:"https://nextjswithredux-fulltemplate.vercel.app/",logo:"assets/nextjslogo.png" },
    { title: 'Reactjs/Todolist', content: 'Reactjs Todolist',url:"https://seemly-act.surge.sh/",logo:"assets/reactjs.png" },
    { title: 'Reactjs/Addtocart', content: 'Addtocart Demo project Reactjs with Reduxtoolkit ',url:"https://myfirstaddtocart.vercel.app/",logo:"assets/reactjs.png" },
    { title: 'Nextjs/Redux', content: 'GL Request Form',url:"https://glrequestform.vercel.app/",logo:"assets/nextjslogo.png" },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
