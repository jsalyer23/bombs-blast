import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public title: string = 'Contact Us';
  public contactEmail: string = 'bombsblastofficial@gmail.com';

  constructor() { }

  ngOnInit() {
  }

}
