import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  faSyncAlt = faSyncAlt;

  transactions: any;
  constructor() {}

  ngOnInit() {
    this.loadTransactions();
  }

  loadTransactions() {
    fetch(environment.API_URL+"/transactions/commerce/"+environment.commerceId)
      .then(async response => {
        const data = await response.json();
        this.transactions = data['res'];
      })
      .catch(error => {
        console.error("There was an error!", error);
    });
  }

}
