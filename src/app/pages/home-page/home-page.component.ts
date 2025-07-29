import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutPageComponent } from "../about-page/about-page.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, AboutPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
