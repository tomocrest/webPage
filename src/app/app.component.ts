import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';

import { TitleComponent } from './title.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hi! My name is Gabe.  I like to build stuff.  This is my page.  Enjoy!';
}
