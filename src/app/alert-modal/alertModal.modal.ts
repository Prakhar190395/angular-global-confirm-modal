export class AlertModal {
  // type: AlertType;
  title: string;
  message: string;
  cancelButton: CancelButton;
  confirmButton: ConfirmButton;
}

class CancelButton {
  show: Boolean;
  name: String;
}

class ConfirmButton {
  show: Boolean;
  name: String;
}
/* export enum AlertType {
  Success,
  Error,
  Info,
  Warning
} */
