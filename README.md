# AlertModal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.13.
It is the global confirmation alert modal from different component

## How to use
  1. First clone the repo
  2. npm install
  3. ng serve

## How to create and call modal service from different component
    1. Install this npm boostrap & ngx-bootstrap
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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
