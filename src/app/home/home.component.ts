import { Component} from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: User;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
   }

   isAdmin() {
     return this.user.role === "admin";
   }
}
