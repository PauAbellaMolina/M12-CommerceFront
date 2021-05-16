import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: any;
  inputValue: number;
  constructor(private barcodeScanner: BarcodeScanner) {}

  cancelTransaction() {
    this.data = null;
  }

  onInputChange(event: any) {
    this.inputValue = event.target.value;
  }

  scan() {
    this.data = null;

    this.barcodeScanner.scan().then(barcodeData => {
      this.data = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
