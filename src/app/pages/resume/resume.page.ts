import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserDataService } from '../../user-data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
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
