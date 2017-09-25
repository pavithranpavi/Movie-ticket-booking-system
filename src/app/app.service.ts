import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {environment} from '../environments/environment';


import 'rxjs/add/operator/toPromise';
import 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class KnowledgeHub {


    service: ServiceVar = {
        header: {},
        sessionStore: '',
        authToken: '',
        options: {}
    };

    baseUrl= environment.baseUrl;

    constructor(public http: Http) {
        this.service.header = new Headers();
        this.service.header.append('Accept', 'application/json');
        this.service.options = new RequestOptions({headers: this.service.header});
    }

    public getMoviesList() {
        const url = this.baseUrl + 'getMoviesList';

        return this.http.get(url)
            .map(res => res.json())
            .map(data => {
                return data;
            }).toPromise();
    }

    public getMovieDetail(id) {

        const url = this.baseUrl + 'getMovie/' + id;

        console.log('baseUrl', this.baseUrl);
        return this.http.get(url)
            .map(res => res.json())
            .map(data => {
                return data;
            }).toPromise();
    }

    public ticketBook(request) {

        const url = this.baseUrl + 'ticketBook';
        return this.http.post(url, request, this.service.options)
            .map(res => res.json())
            .map(data => {
                return data;
            }).toPromise();
    }

    public getBookingList() {

        const url = this.baseUrl + 'getBookingList';
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
    }
}


export class ServiceVar {
    header: any;
    sessionStore: any;
    authToken: any;
    options: any;
}