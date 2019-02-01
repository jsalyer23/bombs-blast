import { Component, OnInit } from '@angular/core';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string = 'Bombs Blast';
  public content: string = 'Content goes here';

  constructor() { }

  ngOnInit() {
  }

}
