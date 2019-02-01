import { Component, OnInit } from '@angular/core';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public title: string = 'About Bombs Blast';
  public bombsBlast: Object = {
    genre: 'Punk, Ska, Hardcore',
    bandMembers: [
      { name: 'Zach', role: 'Vocals' },
      { name: 'Kaden', role: 'Guitar' },
      { name: 'Jarett', role: 'Drums' },
      { name: 'Tony', role: 'Bass' },
      { name: 'Danny', role: 'Guitar' }
    ],
    homeTown: 'Kearney, NE',
    recordLabel: { name: 'Hellcat Records', url: 'www.hell-cat.com' },
    biography: `Started in 2007 Bombs Blast has been traveling almost non-stop week to week playing our brand of dirty spit in yer face ska-punk...We've played everything from back yards to Auditoriums...Venues to parks to bars to dingy little basements... Too strong to quit, we're here to stay...takin what's ours and making our name!`,
    currentLocation: 'Kearney, NE',
    influences: 'Rancid, Choking Victim, The Unseen, Cheap Sex',
    contact: 'bombsblastofficial@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
