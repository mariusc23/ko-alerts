 Knockout Alerts
---------------

> Components to display bootstrap and bootstrap-like alerts.

[![npm](https://img.shields.io/npm/v/ko-alerts.svg)](https://www.npmjs.com/package/ko-alerts)
[![bower](https://img.shields.io/bower/v/ko-alerts.svg)](https://github.com/lintelio/ko-alerts)
[![Build Status](https://travis-ci.org/mariusc23/ko-alerts.svg)](https://travis-ci.org/mariusc23/ko-alerts)


## Getting Started

Install from bower:

    bower install ko-alerts --save

Or install from npm:

    npm install ko-alerts --save


Load module:
```js
// app.js
require.config({
  paths: {
    knockout: 'bower_components/knockout/dist/knockout',
    text: 'bower_components/text/text',
    alerts: 'bower_components/ko-alerts/lib/alerts'
  }
});

require(['knockout', 'alerts'], function(ko, alerts) {
  ko.components.register('alerts', alerts);
});
```


## Alert Component

```html
<alert params="alert:options, onClose:onClose"></alert>
```


## Options

##### options.title
Alert title. Displays in `<strong>`. Optional.

##### options.description
Alert message.

##### options.type
Alert type (ie. `success`, `warning`, `danger`, `info`). Can be any string.

Alert will have class of `alert-{type}`.

Defaults to `info`.

#### options.dismissible
Boolean. Determines if close button should be visible and adds class of `alert-dismissible`.

Defaults to `true`.


## onClose
Callback function to be invoked when the alert is dismissed by the user.

The following arguments are provided:
  - `options`:        alert properties
  - `alertViewModel`: alert viewmodel
  - `e`:              click event

Alert will not hide itself if you provide a custom onClose function. You can do that by setting the alert's `visibile` observable to `false`.

```js
function(options, alertViewModel, e) {
  alertViewModel.visible(false);
}
```


## Alerts Component

```html
<alerts params="alerts:alerts"></alerts>
```

Your ViewModel:

```js
function MyShinyViewModel() {
  this.alerts = ko.observable([
    {
      title: 'Success!',
      description: 'You did something right!',
      type: 'success'
    },
    {
      title: 'Warning!',
      description: 'This could be dangerous.',
      type: 'warning'
    },
    {
      title: 'Error!',
      description: 'You did something wrong!',
      type: 'danger'
    },
    {
      title: 'Info!',
      description: 'You might wanna know...',
      type: 'info'
    }
  ]);
}
```


## Screenshots
![Bootstrap Demo](/../screenshots/bootstrap.png?raw=true)


## License
Copyright (c) 2015 Marius Craciunoiu. Licensed under the MIT license.
