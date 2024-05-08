import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

import { Task1Component } from '../task1/task1.component';
import { Task2Component } from '../task2/task2.component';
import { Task3Component } from '../task3/task3.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent,Task1Component,Task2Component,Task3Component],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
