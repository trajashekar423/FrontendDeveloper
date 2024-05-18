import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MyresumeComponent } from '../myresume/myresume.component';
import { LazyLoadImageModule} from 'ng-lazyload-image';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderComponent,CommonModule,RouterLink,MyresumeComponent,LazyLoadImageModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navbar =['Aboutme','MyResume','MyPortfolio','Contact'];


  constructor() {
    images: 'string';
  }

}


