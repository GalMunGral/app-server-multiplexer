import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notube';
  sideNavOpened = true;

  toggleSideNav() {
    this.sideNavOpened = !this.sideNavOpened;
  }
}
