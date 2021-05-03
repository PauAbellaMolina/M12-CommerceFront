import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPopupComponent } from './confirm-popup.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ConfirmPopupComponent],
  exports: [ConfirmPopupComponent]
})
export class ConfirmPopupComponentModule {}
