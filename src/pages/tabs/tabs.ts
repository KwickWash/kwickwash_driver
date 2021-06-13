import { Component } from '@angular/core';

import { AccountPage } from '../account/account';
import { HomePage } from '../home/home';
import { OrderconfirmedPage } from '../orderconfirmed/orderconfirmed';
import { OrderrequestPage } from '../orderrequest/orderrequest';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = OrderconfirmedPage;
  tab3Root = OrderrequestPage;
  tab4Root = AccountPage;
  constructor() {
  }
}
