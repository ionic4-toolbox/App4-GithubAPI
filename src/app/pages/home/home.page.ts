import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../user-data.service';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit(): void {
    this.seo.setTitle('Gary Großgarten - Developer');

  }
  constructor(public user: UserDataService, private seo: SeoService) {

  }
}
