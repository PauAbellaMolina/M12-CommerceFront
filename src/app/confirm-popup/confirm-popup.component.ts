import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss'],
})
export class ConfirmPopupComponent implements OnInit {
  @Input() amount: number;
  points: Number;

  @Output() onCancel = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.points = this.amount*2;
  }

  cancel() {
    this.onCancel.emit(null);
  }

}
