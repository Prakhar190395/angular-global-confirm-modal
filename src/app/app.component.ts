import { Component } from '@angular/core';
import { AlertModalService } from './alert-modal/alertModal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  alertDetails = {
    title: 'Title',
    message: 'Hello',
    cancelButton : { show: true, name: 'Close'},
    confirmButton: { show: true, name: 'Confirm'},
  };
  constructor(
    private alertModalService: AlertModalService,
  ) {
    this.alertModalService.openPopup(this.alertDetails).subscribe(result => {
      console.log('Hello I am the result of modal popup', result);
    });
  }
}
