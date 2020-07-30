import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal.component';

@Injectable({
  providedIn: 'root'
})

export class AlertModalService {
  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  openPopup(alertDetails) {
    this.modalRef =  this.modalService.show(AlertModalComponent);
    this.modalRef.content.alertDetails = alertDetails;
    return this.modalRef.content.onClose;
  }
  /*
    How to use modal service from different component
    1. Install boostrap & ngx-bootstrap
    2. Include ModalModule.forRoot() in import array in module
    3. Copy the alert Modal in your code
    4. When calling the service the modal should be like this
      alertDetails = {
                        title: 'Title',
                        message: 'Hello',
                        cancelButton : { show: true, name: 'Close'},
                        confirmButton: { show: true, name: 'Confirm'},
                      };
    5. use the alertModal.service for calling the popup
        this.alertModalService.openPopup(this.alertDetails).subscribe(result => {
          console.log("Hello I am the result of modal popup",result);
        });
    6. If result is true then its clicked on confirm & false when modal is Closed
  */
}
