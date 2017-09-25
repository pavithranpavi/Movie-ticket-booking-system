import { Component , OnInit} from '@angular/core';

import {KnowledgeHub} from '../app.service';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-book-tickets',
    templateUrl: './book-tickets.component.html',
    styleUrls: ['./book-tickets.component.scss'],
    providers: [KnowledgeHub]
})
export class BookTicketsComponent implements OnInit {

    movieId: any;
    movieDetail: any;
    quantity: string;
    date: any;

    constructor(public KnowledgeHub: KnowledgeHub, private route: ActivatedRoute, private router: Router) {

        this.route.params.subscribe( params => {
            this.movieId = params['id'];
            this.ngOnInit();
        });
    }

    ngOnInit() {

        this.KnowledgeHub.getMovieDetail(this.movieId).then(success => {

            if (success && success[0]) {
                this.movieDetail = success[0];
            }
        });
    }

    onSubmit(detail , quantity , picker) {

        console.log('quantity', quantity);
        console.log('picker', picker);
        const req = {
            quantity: quantity,
            date: picker,
            movieName: detail.title,
            movieId: detail.id
        };

        console.log('req' , req);

        this.KnowledgeHub.ticketBook(req).then(success => {

            console.log('success ticketBook' , success);
            this.router.navigateByUrl('/myBooking', true);
        }, error => {

        })
    }
}
