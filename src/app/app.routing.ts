import { Routes } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {MyBookingComponent} from './my-booking/my-booking.component'
import {BookTicketsComponent} from './book-tickets/book-tickets.component'

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full',
    },
    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: 'bookTicket/:id',
        component: BookTicketsComponent
    },
    {
        path: 'myBooking',
        component: MyBookingComponent
    }
];
