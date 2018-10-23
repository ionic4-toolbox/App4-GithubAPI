import { UserDataService } from './../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.page.html',
  styleUrls: ['./impressum.page.scss'],
})
export class ImpressumPage implements OnInit {

  constructor(public user: UserDataService) { }

  ngOnInit() {
  }

}
