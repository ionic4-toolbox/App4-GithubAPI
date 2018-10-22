import { Component } from '@angular/core';
import { UserDataService } from '../../user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public user: UserDataService) { }
}
