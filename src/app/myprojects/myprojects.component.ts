import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MypersonalworksComponent } from "../mypersonalworks/mypersonalworks.component";


export interface myprojects {
  projectname: string;
  projectdes: string;
  projectimage: string;
  imageUrl: string;
  role: string;
  Organization: string;
  Description: string;
  Responsibilities: string;

}


@Component({
    selector: 'app-myprojects',
    standalone: true,
    templateUrl: './myprojects.component.html',
    styleUrl: './myprojects.component.css',
    imports: [CommonModule, MypersonalworksComponent]
})
export class MyprojectsComponent {  
  heading = ['My Projects']
  myproject: any;
  

}
