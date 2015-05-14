define(['knockout'], function (ko) {
  'use strict';

  /**
   * Alert view model.
   *
   * @param  {Object}    params                    - Component parameters.
   * @param  {Object}    params.alert              - Alert properties.
   * @param  {String}    params.alert.title        - Alert title. (optional)
   * @param  {String}    params.alert.description  - Alert description.
   * @param  {String}    params.alert.type         - Alert type. (optional)
   * @param  {Boolean}   params.alert.dismissible  - Dismissability indicator. (optional)
   * @param  {Function}  params.onClose            - Close function. (optional)
   */
  function AlertViewModel(params) {
    var alert = params.alert;

    this.title = alert.title;
    this.description = alert.description;

    this.dismissible = (typeof alert.dismissible !== 'undefined') ? alert.dismissible : true;
    this.classes = {
      'alert-dismissible': this.dismissible
    };

    this.type = alert.type || 'info';
    this.classes['alert-' + alert.type] = true;

    this.visible = ko.observable(true);
    this.onClose = params.onClose || this.onClose;
  }

  AlertViewModel.prototype.onClose = function(alert, e) {
    this.visible(false);
  };

  return {
    template: { require: 'text!lib/alert.html' },
    viewModel: AlertViewModel
  };
});
