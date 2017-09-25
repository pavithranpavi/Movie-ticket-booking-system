import { Component, OnInit} from '@angular/core';

import {KnowledgeHub} from '../app.service'

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    providers: [KnowledgeHub]
})

export class LandingComponent implements OnInit {

    movies: any;


    constructor( public KnowledgeHub: KnowledgeHub) {}

    ngOnInit() {

        this.KnowledgeHub.getMoviesList().then(success => {
            this.movies = success;
        });
    }
}
