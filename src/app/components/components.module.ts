import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdDatepickerModule, MaterialModule, MdNativeDateModule, MdInputModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import {MdListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MdTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {FormComponent} from './form/form.component';
import {HeaderComponent} from './header/header.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports:      [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MdNativeDateModule,
        MdDatepickerModule,
        CdkTableModule,
        MaterialModule,
        MdInputModule,
        MdButtonModule,
        FlexLayoutModule,
        MdCheckboxModule
    ],
    declarations: [
        FormComponent,
        HeaderComponent
    ],
    exports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormComponent,
        HeaderComponent,
        MdNativeDateModule,
        MdDatepickerModule,
        MaterialModule,
        MdInputModule,
        MdButtonModule,
        CdkTableModule,
        FlexLayoutModule,
        MdCheckboxModule
    ]
})

export class ComponentModule {}
