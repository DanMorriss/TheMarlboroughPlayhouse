import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { PrivateHirePageComponent } from './pages/private-hire-page/private-hire-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
    { 
        path: '',
        component: LandingPageComponent,
        title: 'The Marlborough Playhouse',
    },
    { 
        path: 'home',
        component: HomePageComponent,
        title: 'Home - The Marlborough Playhouse'
    },
    { 
        path: 'about',
        component: AboutPageComponent,
        title: 'About Us - The Marlborough Playhouse'
    },
    { 
        path: 'contact',
        component: ContactPageComponent,
        title: 'Contact Us - The Marlborough Playhouse'
    },
    { 
        path: 'booking',
        component: BookingPageComponent,
        title: 'Booking - The Marlborough Playhouse'
    },
    { 
        path: 'private-hire',
        component: PrivateHirePageComponent,
        title: 'Private Hire - The Marlborough Playhouse'
    }
];
