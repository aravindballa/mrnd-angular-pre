import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { Student } from './student';
import { StudSortPipe } from './studsort.pipe';
import myGlobals = require('./globals');

@Component({
    selector: 'lboard',
    templateUrl: 'app/templates/leaderboard.html',
    providers: [LeaderboardService, StudSortPipe],
})
export class LeaderboardComponent implements OnInit{
    errorMessage: string;
    students:  Student[];
    mode: 'Observable';
    colleges: string[];
    field: String;

    constructor(private leaderboardService: LeaderboardService, private pipe:StudSortPipe) {
    }

    ngOnInit() { this.getStats(); }

    getStats() {
        this.leaderboardService.getStats()
                            .subscribe(
                                students => this.students = students,
                                error =>  this.errorMessage = <any>error,
                                () => this.getColleges()
                            );
    }

    getColleges() {
        var i: number;
        this.colleges = [];
        for(i=0; i<this.students.length;i++) {
            if(this.colleges.indexOf(this.students[i]['College'])== -1) {
                this.colleges.push(this.students[i]['College']);
            }
        }

    }

    tableHeads() : string[] {
        return [
            "Name",
            "College",
            "C-Basics",
            "C-Arrays-Worksheet",
            "C-Strings-Worksheet",
            "C-LinkedLists-Worksheet",
            "C-Arrays2-Worksheet",
            "C-Strings2-Worksheet",
            "C-LinkedLists2-Worksheet",
            "C-15Puzzle",
            "C-Recursion",
            "C-BinarySearchTree",
            "Penalty",
            "Karma",
            "Percentage",
            "Total Score",
            "TimeRanking"
        ]
    }

    from(arg: string) {
        myGlobals.changing = arg;
    }
}