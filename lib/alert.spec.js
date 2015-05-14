define(['chai', 'alert'], function(chai, component) {

  describe('alert component', function() {

    var vm = new component.viewModel({
      alert: {
        title: 'test',
        description: 'test',
        type: 'warning',
        dismissible: false
      }
    });

    it('should have correct title', function() {
      chai.expect(vm.title).to.equal('test');
    });

    it('should have correct description', function() {
      chai.expect(vm.description).to.equal('test');
    });

    it('should have correct type', function() {
      chai.expect(vm.type).to.equal('warning');
    });

    it('should have correct type class', function() {
      chai.expect(vm.classes['alert-warning']).to.be.true;
    });

    it('should not have dismissible class', function() {
      chai.expect(vm.classes['alert-dismissible']).to.be.false;
    });

    it('should be visible', function() {
      chai.expect(vm.visible()).to.be.true;
    });

    it('should toggle visibility', function() {
      vm.onClose();
      chai.expect(vm.visible()).to.be.false;
    });

  });

});
