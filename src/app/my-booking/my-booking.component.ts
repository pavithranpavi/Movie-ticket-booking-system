import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {KnowledgeHub} from '../app.service';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/merge';


@Component({
    selector: 'app-my-booking',
    templateUrl: './my-booking.component.html',
    styleUrls: ['./my-booking.component.scss'],
    providers: [KnowledgeHub]
})
export class MyBookingComponent implements OnInit {

    displayedColumns = ['_id', 'movieName', 'quantity', 'date'];
    dataSource: any;
    constructor(private KnowledgeHub: KnowledgeHub) { }

    ngOnInit() {
        this.dataSource = new ExampleDataSource(this.KnowledgeHub);
        console.log('this.dataSource', this.dataSource);

    }
}

export interface Element {
    movieName: string;
    _id: string;
    quantity: string;
    date: string;
}

export class ExampleDataSource extends DataSource<any> {

    subject: BehaviorSubject<Element[]> = new BehaviorSubject<Element[]>([]);
    constructor(private KnowledgeHub: KnowledgeHub) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<any> {

        if (!this.subject.isStopped) {
            this.KnowledgeHub.getBookingList()
                .then(res => {
                    console.log('getBookingList', res)
                    this.subject.next(res)
                });
        }

        return Observable.merge(this.subject);
    }

    disconnect() {}
}
