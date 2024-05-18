import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface CardItem {
    imageUrl: string;
    codetitle: string;
    url:string
   
}
interface DesignItem {
  title: string;
  imageUrl: string;
 
}

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.css'
})
export class MyskillsComponent implements OnInit {
  items: CardItem[] = [
    {      
      codetitle:"Html",
      imageUrl: 'assets/html-5.png',
      url:"#"
    },

    { 
      codetitle:"CSS",
      imageUrl: 'assets/css-3.png' ,
      url:"#"
    },

    { 
      codetitle:"Bootstrap",
      imageUrl: 'assets/bootstrap.png',
      url:"#"
    },

    { 
      codetitle:"Javascript",
      imageUrl: 'assets/js.png',
      url:"#"
    },

    { 
      codetitle:"JQuery",
      imageUrl: 'assets/jq.png',
      url:"#"
    },
    { 
      codetitle:"Angular",
      imageUrl: 'assets/angularlogo.png',
      url:"#"
    },

    { 
      codetitle:"NGRX",
      imageUrl: 'assets/ngrx.png',
      url:"#" 
    },

    { 
      codetitle:"React",
         imageUrl: 'assets/reactjs.png',
         url:"#"
    },

    { 
      codetitle:"Redux",
      imageUrl: 'assets/redux.png',
      url:"https://nextjsreduxstore-demo-git-master-trajashekar423s-projects.vercel.app/"
      
 },
 { 
  codetitle:"Nextjs",
  imageUrl: 'assets/nextjslogo.png',
  url:"https://nextjsreduxstore-demo.vercel.app/"
},
    // Add more items as needed
  ];


  mydesignitems: DesignItem[] = [   
     {    
      title:"Adobe Photoshop",
      imageUrl: 'assets/ps.png' 
    },

    {    
      title:"Adobe Illustrator",
      imageUrl: 'assets/Adobe_Illustrator.png' 
    },

    {   
      title:"Adobe XD", 
      imageUrl: 'assets/xd.png' 
    },

    {   
      title:"Figma", 
      imageUrl: 'assets/figma.png' 
    },
  ]
item: any;
DesignItem: any;

  constructor() { }

  ngOnInit(): void {
  }
}