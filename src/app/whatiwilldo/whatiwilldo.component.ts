import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule} from 'ng-lazyload-image';



export interface Card {
  title: string;
  description: string;
  imageUrl: string;
}
@Component({
  selector: 'app-whatiwilldo',
  standalone: true,
  imports: [CommonModule, FormsModule,LazyLoadImageModule],
  templateUrl: './whatiwilldo.component.html',
  styleUrl: './whatiwilldo.component.css'
})
export class WhatiwilldoComponent {
  cardData= [
    {
      title: 'Frontend Development',
      description: 'Using Html, css, Scss, Bootstrap, Javscript, Jquery, Angular, React, Nextjs, Redux',
      imageUrl: 'https://www.mindinventory.com/blog/wp-content/uploads/2022/10/frontend-development-tools.png'
    },
    {
      title: 'UI&UX Designer',
      description: 'Creating Wireframes for Web & MobileApps using Adobe Tools & Figma',
      imageUrl: 'https://www.noupe.com/wp-content/uploads/2020/10/adobe-figma.jpg'
    },
    {
      title: 'Devops',
      description: 'Engaged in team discussions and collaborative problem solving Worked on Boards, Repos, Pipelines',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzEyAoZifdY7syVmGZoDu4ptHjioYBIeWzcBZEkH0Ug&s'
    },
   
  ];

  image1="https://www.mindinventory.com/blog/wp-content/uploads/2022/10/frontend-development-tools.png";
  image2="https://www.noupe.com/wp-content/uploads/2020/10/adobe-figma.jpg";
  image3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzEyAoZifdY7syVmGZoDu4ptHjioYBIeWzcBZEkH0Ug&s";
imageUrl: any;
}
