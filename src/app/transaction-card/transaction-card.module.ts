import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionCardComponent } from './transaction-card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, FontAwesomeModule],
  declarations: [TransactionCardComponent],
  exports: [TransactionCardComponent]
})
export class TransactionCardComponentModule {}
