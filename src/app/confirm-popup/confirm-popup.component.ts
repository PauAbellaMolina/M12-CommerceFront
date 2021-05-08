import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

import { faCheck, faTimes, faBug } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss'],
})
export class ConfirmPopupComponent implements OnInit {
  //Icons
  faCheck = faCheck;
  faTimes = faTimes;
  faBug = faBug;

  @Input() amount: number; //Amount of money the user spent
  @Input() data: string; //The QR info (which will be the users id)
  points: number; //Amount transformed to points
  user: any; //To store the user from the api fetches
  userPoints: number; //To store the users points from the api fetch
  confirmed: number; //To store the status of the transaction. 0 is not transactioned, 1 is correct, 2 is error
  buttonOn: boolean; //To disable the confirmar button when clicked so we prevent from it being spamed

  @Output() onCancel = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.confirmed = 0;
    this.points = this.amount*2;
    this.buttonOn = true;

    //Fetch user info
    fetch(environment.API_URL+"/users/"+this.data)
      .then(async response => {
        const data = await response.json();
        if(data['status'] == 1) {
          this.user = data['res'];

          //When user info fetched, fetch their points of that commerce
          fetch(environment.API_URL+"/points/"+data['res'].id+"/"+environment.commerceId)
            .then(async response => {
              const data = await response.json();
              this.userPoints = data['res'].points;
            })
            .catch(error => {
              console.error("There was an error!", error);
          });
        }
      })
      .catch(error => {
        console.error("There was an error!", error);
    });
  }

  //X (cancel) button click
  cancel() {
    this.onCancel.emit(null);
  }

  //Confirm button click
  confirm() {
    this.buttonOn = false; //Disable the confirmar button

    fetch(environment.API_URL+"/points/"+this.user.id+"/"+environment.commerceId+"/"+this.points, { method: 'POST' })
      .then(async response => {
        const data = await response.json();
        if(data['status'] == 1) {
          this.confirmed = 1;

          // Recall to update the points of the user with the new added ones
          fetch(environment.API_URL+"/points/"+this.user.id+"/"+environment.commerceId)
            .then(async response => {
              const data = await response.json();
              this.userPoints = data['res'].points;
            })
            .catch(error => {
              console.error("There was an error!", error);
          });
        } else {
          this.confirmed = 2;
        }
        // this.user = data['res'];
      })
      .catch(error => {
        console.error("There was an error!", error);
    });
  }

}
