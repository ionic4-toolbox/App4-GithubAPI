import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserDataService } from '../../user-data.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
  animations: [
    trigger('about', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('225ms 150ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('exp', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('225ms 250ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('ed', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('225ms 350ms', style({ opacity: 1 }))
      ])
    ]),
  ]
})
export class ResumePage implements OnInit {


  constructor(public user: UserDataService) { }

  ngOnInit() {
  }

  sendMail() {
    window.open(`mailto:${this.user.config.email}`);
  }

  stepperClick(index) {
    switch (index) {
      case 3: this.sendMail(); break;
    }
  }
}
