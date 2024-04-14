import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { cilList, cilShieldAlt} from '@coreui/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title: string = 'inmobiliaria2';
  icons = { cilList, cilShieldAlt };
}
