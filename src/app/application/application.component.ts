import { Component, Input, OnInit, Type } from '@angular/core';
import { Recipe } from './app.model';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
@Input('recipe')recipe:Recipe;
//@Input()type:'happy';
view=false;
constructor() { }

  ngOnInit(): void {
  }
toggle(){
this.view=!this.view
}
}
 