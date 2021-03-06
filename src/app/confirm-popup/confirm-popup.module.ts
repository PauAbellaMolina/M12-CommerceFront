import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPopupComponent } from './confirm-popup.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, FontAwesomeModule],
  declarations: [ConfirmPopupComponent],
  exports: [ConfirmPopupComponent]
})
export class ConfirmPopupComponentModule {}
