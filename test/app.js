require.config({
  paths: {
    knockout: 'bower_components/knockout/dist/knockout',
    text: 'bower_components/text/text',
    alerts: 'lib/alerts',
    alert: 'lib/alert'
  }
});

require(['knockout', 'alerts'], function(ko, alerts) {
  'use strict';

  ko.components.register('alerts', alerts);

  ko.applyBindings({
    alerts: ko.observable([
      {
        title: 'Success!',
        description: 'You did something right!',
        type: 'success',
        dismissible: false
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
    ]),
    alert: {
      title: 'Title!',
      description: 'Description.',
      type: 'warning'
    }
  });

  window.ko = ko;
});
