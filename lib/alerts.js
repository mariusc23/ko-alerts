define(['knockout'], function (ko) {
  'use strict';

  ko.components.register('alert', { require: 'lib/alert' });

  /**
   * Alerts view model.
   *
   * @param  {Object}  params         - Component parameters.
   * @param  {Array}   params.alerts  - Alerts observable.
   */
  function AlertsViewModel(params) {
    this.alerts = params.alerts;
  }

  /**
   * Removes alert from alerts observable.
   *
   * @param  {Object}  alert  - Array member.
   */
  AlertsViewModel.prototype.onClose = function(alert) { /* (alert, alertViewModel, e) */
    var alerts = ko.unwrap(this.alerts);
    alerts.splice(alerts.indexOf(alert), 1);
    this.alerts(alerts);
  };

  return {
    template: { require: 'text!lib/alerts.html' },
    viewModel: AlertsViewModel
  };

});
