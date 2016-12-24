import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LeaderboardComponent } from './leaderboard.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { StudFilterPipe } from './studfilter.pipe'
import { StudSortPipe } from './studsort.pipe'

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, CommonModule],
  declarations: [ AppComponent, LeaderboardComponent, StudFilterPipe, StudSortPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
