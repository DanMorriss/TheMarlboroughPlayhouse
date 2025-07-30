import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutPageComponent } from "../about-page/about-page.component";
import { ContactPageComponent } from "../contact-page/contact-page.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, AboutPageComponent, ContactPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
