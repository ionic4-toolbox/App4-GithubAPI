import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../user-data.service';
import { trigger, transition, stagger, animate, style, query } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('125ms', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('225ms', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProjectsPage implements OnInit {

  selectedLogin: string;

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

  done(e) {
    console.log(e);
  }
}
