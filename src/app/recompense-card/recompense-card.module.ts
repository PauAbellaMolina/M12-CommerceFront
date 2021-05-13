import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecompenseCardComponent } from './recompense-card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, FontAwesomeModule],
  declarations: [RecompenseCardComponent],
  exports: [RecompenseCardComponent]
})
export class RecompenseCardComponentModule {}
