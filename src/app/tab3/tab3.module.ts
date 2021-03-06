import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TransactionCardComponentModule } from '../transaction-card/transaction-card.module';
import { NotificationCardComponentModule } from '../notification-card/notification-card.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
    TransactionCardComponentModule,
    NotificationCardComponentModule,
    FontAwesomeModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
