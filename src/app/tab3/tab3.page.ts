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
  loading: boolean

  constructor() {}

  ngOnInit() {
    this.loadTransactions();
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

}
