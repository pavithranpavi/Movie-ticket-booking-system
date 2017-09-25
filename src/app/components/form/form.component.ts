import {Component, Injectable, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [],
  styleUrls: ['./form.component.scss'],

})

export class FormComponent implements OnInit {
    ngOnInit(): void {
    }
}
