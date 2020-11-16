import { Component } from '@angular/core';
import{Recipe} from "./application/app.model"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 
export class AppComponent {
  title = 'app';
  gridColumns = 3;
  
  
  constructor() { }
  happy="happy";
    recipes: Recipe[] =  [
    new Recipe('A Test Recipe',
     'This is simply a test', 
     '/assets/Rectangle.png',
   ),
    new Recipe('A 2Test Recipe', 'This is simply a test', 
    '/assets/Rectangle.png',
    ),new Recipe('A Test Recipe',
    'This is simply a test', 
    '/assets/Rectangle.png',
  ),new Recipe('A Test Recipe',
  'This is simply a test', 
  '/assets/Rectangle.png',
),
    ]
  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
}

