import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../user-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(public user: UserDataService) { }

  ngOnInit() {
  }

  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      // tslint:disable-next-line:no-bitwise
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  intToRGB(i) {
    // tslint:disable-next-line:no-bitwise
    const c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

    console.log('00000'.substring(0, 6 - c.length) + c);

    return '00000'.substring(0, 6 - c.length) + c;
  }

  seeOnGithub(url: string) {
    window.open(url, '_blank');
  }

}
