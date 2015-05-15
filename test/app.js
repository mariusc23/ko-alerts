require.config({
  paths: {
    'knockout':  'bower_components/knockout/dist/knockout',
    'text':      'bower_components/text/text',
    'ko-alerts': '.'
  }
});

require(['knockout'], function(ko) {
  'use strict';

  ko.components.register('alerts', { require: 'ko-alerts/lib/alerts' });

  ko.applyBindings({
    alerts: ko.observable([
      {
        title: 'Success!',
        message: 'You did something right!',
        type: 'success',
        dismissible: false
      },
      {
        title: 'Warning!',
        message: 'This could be dangerous.',
        type: 'warning'
      },
      {
        title: 'Error!',
        message: 'You did something wrong!',
        type: 'danger'
      },
      {
        title: 'Info!',
        message: 'You might wanna know...',
        type: 'info'
      }
    ]),
    alert: {
      title: 'Title!',
      message: 'Description.',
      type: 'warning'
    }
  });

  window.ko = ko;
});
