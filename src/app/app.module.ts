
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ComponentModule } from './components/components.module';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { LandingComponent } from './landing/landing.component';

import { AppRoutes } from './app.routing';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { MyBookingComponent } from './my-booking/my-booking.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        BookTicketsComponent,
        MyBookingComponent
    ],
    imports: [
        FormsModule,
        ComponentModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }