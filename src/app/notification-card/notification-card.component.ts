import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss'],
})
export class NotificationCardComponent implements OnInit {

  @Input() notification: any;

  constructor() { }

  ngOnInit() {}

  getDate(date: any) {
    return moment(date, 'YYYY-MM-DD h:m:s').format('DD/MM/YYYY');
  }
  getTime(date: any) {
    return moment(date, 'YYYY-MM-DD h:m:s').format('h:m')+"h";
  }

}
