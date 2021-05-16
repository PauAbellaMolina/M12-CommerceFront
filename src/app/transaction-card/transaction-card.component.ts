import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss'],
})
export class TransactionCardComponent implements OnInit {

  @Input() transaction: any;
  userInfo: any;

  constructor() { }

  ngOnInit() {
    fetch(environment.API_URL+"/users/"+this.transaction.id_user)
      .then(async response => {
        const data = await response.json();
        this.userInfo = data['res'];
      })
      .catch(error => {
        console.error("There was an error!", error);
    });
  }

}
