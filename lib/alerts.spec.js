define(['chai', 'knockout', 'alerts'], function(chai, ko, component) {

  describe('alerts component', function() {

    var vm = new component.viewModel({
      alerts: ko.observable([
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
      ])
    });

    it('should have 4 alerts', function() {
      chai.expect(ko.unwrap(vm.alerts).length).to.equal(4);
    });

    it('should remove alert', function() {
      vm.onClose(ko.unwrap(vm.alerts)[0]);
      chai.expect(ko.unwrap(vm.alerts).length).to.equal(3);
    });

  });

});
