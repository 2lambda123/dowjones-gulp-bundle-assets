var proxyquire = require('proxyquire'),
  sinon = require('sinon'),
  libPath = './../../lib',
  ConfigModel = require(libPath + '/model/config');

describe('stream-bundles-watch', function () {

  var streamBundlesWatch,
    gulpStub,
    watchReturn;

  beforeEach(function () {
    gulpStub = sinon.stub();
    watchReturn = sinon.stub();
  });

  it('should start watch', function (done) {

    watchReturn.on = function (eventName, fn) {
      eventName.should.eql('change');
      fn.should.be.type('function');
    };
    sinon.spy(watchReturn, 'on');
    gulpStub.watch = sinon.stub().returns(watchReturn);
    streamBundlesWatch = proxyquire(libPath + '/stream-bundles-watch',
      { 'gulp': gulpStub });

    var config = new ConfigModel({
      bundle: {
        main: {
          scripts: 'some/file.js',
          styles: 'some/file.css'
        }
      }
    }, {});

    streamBundlesWatch(config);

    gulpStub.watch.calledTwice.should.be.ok;
    watchReturn.on.calledTwice.should.be.ok;

    done();

  });

  it('should start watch for copy files string', function (done) {

    watchReturn.on = function (eventName, fn) {
      eventName.should.eql('change');
      fn.should.be.type('function');
    };
    sinon.spy(watchReturn, 'on');
    gulpStub.watch = sinon.stub().returns(watchReturn);
    streamBundlesWatch = proxyquire(libPath + '/stream-bundles-watch',
      { 'gulp': gulpStub });

    var config = new ConfigModel({
      copy: 'some/file'
    }, {});

    streamBundlesWatch(config);

    gulpStub.watch.calledOnce.should.be.ok;
    watchReturn.on.calledOnce.should.be.ok;

    done();

  });

  it('should start watch for copy files array', function (done) {

    watchReturn.on = function (eventName, fn) {
      eventName.should.eql('change');
      fn.should.be.type('function');
    };
    sinon.spy(watchReturn, 'on');
    gulpStub.watch = sinon.stub().returns(watchReturn);
    streamBundlesWatch = proxyquire(libPath + '/stream-bundles-watch',
      { 'gulp': gulpStub });

    var config = new ConfigModel({
      copy: [
        'some/file',
        'some/file2'
      ]
    }, {});

    streamBundlesWatch(config);

    gulpStub.watch.calledTwice.should.be.ok;
    watchReturn.on.calledTwice.should.be.ok;

    done();

  });

  it('should start watch for copy files object', function (done) {

    watchReturn.on = function (eventName, fn) {
      eventName.should.eql('change');
      fn.should.be.type('function');
    };
    sinon.spy(watchReturn, 'on');
    gulpStub.watch = sinon.stub().returns(watchReturn);
    streamBundlesWatch = proxyquire(libPath + '/stream-bundles-watch',
      { 'gulp': gulpStub });

    var config = new ConfigModel({
      copy: {
        src: 'some/file',
        base: 'some'
      }
    }, {});

    streamBundlesWatch(config);

    gulpStub.watch.calledOnce.should.be.ok;
    watchReturn.on.calledOnce.should.be.ok;

    done();

  });

  it('should start watch for copy files object in array', function (done) {

    watchReturn.on = function (eventName, fn) {
      eventName.should.eql('change');
      fn.should.be.type('function');
    };
    sinon.spy(watchReturn, 'on');
    gulpStub.watch = sinon.stub().returns(watchReturn);
    streamBundlesWatch = proxyquire(libPath + '/stream-bundles-watch',
      { 'gulp': gulpStub });

    var config = new ConfigModel({
      copy: [
        {
          src: 'some/file',
          base: 'some'
        }
      ]
    }, {});

    streamBundlesWatch(config);

    gulpStub.watch.calledOnce.should.be.ok;
    watchReturn.on.calledOnce.should.be.ok;

    done();

  });

  it('should throw error for invalid copy property value type', function (done) {

    watchReturn.on = function (eventName, fn) {
      eventName.should.eql('change');
      fn.should.be.type('function');
    };
    sinon.spy(watchReturn, 'on');
    gulpStub.watch = sinon.stub().returns(watchReturn);
    streamBundlesWatch = proxyquire(libPath + '/stream-bundles-watch',
      { 'gulp': gulpStub });

    var config = new ConfigModel({
      copy: true
    }, {});

    (function () {
      streamBundlesWatch(config);
    }).should.throw(/^Unsupported syntax for copy./);

    done();

  });

  it('should throw error for invalid nested copy property value type', function (done) {

    watchReturn.on = function (eventName, fn) {
      eventName.should.eql('change');
      fn.should.be.type('function');
    };
    sinon.spy(watchReturn, 'on');
    gulpStub.watch = sinon.stub().returns(watchReturn);
    streamBundlesWatch = proxyquire(libPath + '/stream-bundles-watch',
      { 'gulp': gulpStub });

    var config = new ConfigModel({
      copy: [
        true
      ]
    }, {});

    (function () {
      streamBundlesWatch(config);
    }).should.throw(/^Unsupported syntax for copy./);

    done();

  });

});
