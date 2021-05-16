import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  faSyncAlt = faSyncAlt;
  transactions: any;
  notifications: any;
  loading: boolean;
  showNotifs: boolean;
  history: boolean;

  notifTitle: any;
  notifBody: any;

  constructor() {}

  ngOnInit() {
    this.loadNotifications();
    this.loadTransactions();

    this.showNotifs = true;
    this.history = false;
  }

  title(event) {
    this.notifTitle = event.target.value;
  }
  body(event) {
    this.notifBody = event.target.value;
  }

  loadTransactions() {
    this.loading = true;

    fetch(environment.API_URL+"/transactions/commerce/"+environment.commerceId)
      .then(async response => {
        const data = await response.json();
        this.transactions = data['res'];
        this.loading = false;
      })
      .catch(error => {
        console.error("There was an error!", error);
    });
  }

  loadNotifications() {
    this.loading = true;

    fetch(environment.API_URL+"/notifications/"+environment.commerceId)
      .then(async response => {
        const data = await response.json();
        this.notifications = data['res'];
        this.loading = false;
      })
      .catch(error => {
        console.error("There was an error!", error);
    });
  }

  changeViews(event: any) {
    if(event.detail.value == 'history') {
      this.history = true;
      this.showNotifs = false;
    } else if(event.detail.value == 'notifications') {
      this.history = false;
      this.showNotifs = true;
    }
  }

  sendNotification() {
    let data = JSON.stringify({title: this.notifTitle, body: this.notifBody});

    fetch(environment.API_URL+"/notifications/"+environment.commerceId, {method: "POST", body: data})
      .then(async response => {
        this.loadNotifications();
      })
      .catch(error => {
        console.error("There was an error!", error);
    });
  }

}
