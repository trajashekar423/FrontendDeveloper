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
    
    { title: 'Reactjs/Addtocart', content: 'Addtocart Demo project Reactjs with Reduxtoolkit ',url:"https://myfirstaddtocart.vercel.app/",logo:"assets/reactjs.png" },
    { title: 'Nextjs/Redux', content: 'GL Request Form',url:"https://glrequestform.vercel.app/",logo:"assets/nextjslogo.png" },
    { title: 'Reactjs/Todolist', content: 'Reactjs Todolist',url:"https://seemly-act.surge.sh/",logo:"assets/reactjs.png" },
    { title: 'Task Management', content: 'Task Management webapp',url:"https://www.figma.com/design/ja8uwQg1JxQqHfKEs6RfEn/create-task?node-id=0-1&t=GDdvSwCp1jTPXa0e-0",logo:"assets/figma.png" },
    { title: 'APPL Corporate Website', content: 'Task Management webapp',url:"https://www.figma.com/design/drsmdPQczdH10mX0pv5c5p/APPL-Corporate-Website---Homepage-design?node-id=0-1&t=0YG6QTYISDvK8e2I-0",logo:"assets/figma.png" },

    { title: 'Truck Tracker', content: 'Good inward & Outward',url:"https://www.figma.com/design/anGhPcmrqZQBuD7PLwDwKp/truck-tracker-new-template?t=C6llNQqyZQWNrjTq-0",logo:"assets/figma.png" },

    { title: 'Pladis', content: 'Good inward & Outward',url:"https://www.figma.com/design/pQ1FoW8TzEafxb9tyu736z/pladis?node-id=0-1&t=wYmq7qVLMtoSfoZo-0",logo:"assets/figma.png" },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
