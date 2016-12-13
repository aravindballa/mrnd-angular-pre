import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { Student } from './student';

@Component({
    selector: 'lboard',
    templateUrl: 'app/templates/leaderboard.html',
    providers: [LeaderboardService]
})
export class LeaderboardComponent implements OnInit{
    errorMessage: string;
    students:  Student[];
    mode: 'Observable';

    constructor(private leaderboardService: LeaderboardService) {}

    ngOnInit() { this.getStats(); }

    getStats() {
        this.leaderboardService.getStats()
                            .subscribe(
                                students => this.students = students,
                                error =>  this.errorMessage = <any>error
                            );
        
    }
}