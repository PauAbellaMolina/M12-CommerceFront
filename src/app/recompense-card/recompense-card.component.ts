import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recompense-card',
  templateUrl: './recompense-card.component.html',
  styleUrls: ['./recompense-card.component.scss'],
})
export class RecompenseCardComponent implements OnInit {

  @Input() recompense: any;
  loading: boolean;

  @Output() onDesactivated = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.loading = false;
  }

  desactivateRecompense() {
    this.loading = true;

    fetch(environment.API_URL+"/recompenses/swapActive/"+this.recompense.id, { method: 'POST' })
      .then(async response => {
        const data = await response.json();
        if(data['status'] == 1) {
          this.onDesactivated.emit(null);
        }
      })
      .catch(error => {
        console.error("There was an error!", error);
    });
  }

  activateRecompense() {
    this.loading = true;

    fetch(environment.API_URL+"/recompenses/swapActive/"+this.recompense.id, { method: 'POST' })
      .then(async response => {
        const data = await response.json();
        if(data['status'] == 1) {
          this.onDesactivated.emit(null);
        }
      })
      .catch(error => {
        console.error("There was an error!", error);
    });
  }

}
