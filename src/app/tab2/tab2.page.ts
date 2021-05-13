import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  faSyncAlt = faSyncAlt;
  recompenses: any;
  loading: boolean;
  data: any;

  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {
    this.loadRecompenses();
  }

  loadRecompenses() {
    this.loading = true;

    fetch(environment.API_URL+"/recompenses/"+environment.commerceId)
      .then(async response => {
        const data = await response.json();
        this.recompenses = data['res'];
        this.loading = false;
      })
      .catch(error => {
        console.error("There was an error!", error);
    });
  }

  scanRecompense() {
    this.data = null;

    this.barcodeScanner.scan().then(barcodeData => {
      this.data = barcodeData;

      fetch(environment.API_URL+"/recompenses/used/"+environment.commerceId+"/"+this.data.text, { method: 'POST' })
        .then(async response => {
          const data = await response.json();
          if(data['status'] == 1) {

          }
        })
        .catch(error => {
          console.error("There was an error!", error);
      });
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
