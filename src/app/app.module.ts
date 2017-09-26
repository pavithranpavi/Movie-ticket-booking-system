
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { LandingComponent } from './landing/landing.component';

import { AppRoutes } from './app.routing';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { MyBookingComponent } from './my-booking/my-booking.component';

import {CdkTableModule} from '@angular/cdk/table';

import {MatTableModule} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule , MatIconModule, MatCardModule, MatToolbarModule, MdDatepickerModule, MdNativeDateModule, MdInputModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import {MdTableModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        BookTicketsComponent,
        MyBookingComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        CdkTableModule,
        MatTableModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        BrowserModule,
        MdNativeDateModule,
        MdDatepickerModule,
        MatMenuModule,
        MdInputModule,
        MdButtonModule,
        MdCheckboxModule,
        MdTableModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}