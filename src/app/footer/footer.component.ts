import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public facebookUrl: String = 'https://www.facebook.com/bombsblast/';

  constructor() { }

  ngOnInit() {
  }

}
