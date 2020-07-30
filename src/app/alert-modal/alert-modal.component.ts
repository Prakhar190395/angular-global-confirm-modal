import { Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { AlertModal } from './alertModal.modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {
  alertDetails: AlertModal;
  public onClose = new Subject<boolean>();

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() { }

  close() {
    this.bsModalRef.hide();
    this.onClose.next(false);
    }

  confirm() {
    this.bsModalRef.hide();
    this.onClose.next(true);
  }

}
