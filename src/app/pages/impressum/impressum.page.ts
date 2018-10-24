import { SeoService } from './../../seo.service';
import { UserDataService } from './../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.page.html',
  styleUrls: ['./impressum.page.scss'],
})
export class ImpressumPage implements OnInit {

  constructor(public user: UserDataService, private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Imprint',
      description: 'Imprint for garygrossgarten.de',
      slug: 'imprint'
    });
    this.seo.setTitle('Gary Großgarten - Impressum');
  }
}
