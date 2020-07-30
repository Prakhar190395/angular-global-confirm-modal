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
}
