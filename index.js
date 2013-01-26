/*
 * Module dependencies
 */
var EventEmitter = require("emitter");

var res = exports = module.exports = function Response(options) {
  EventEmitter(this);
  if(!options) options = {};
  this.statusCode;
  this.headers = {};
};

res.prototype.writeContinue = function writeContinue(encoding) {

};

res.prototype.writeHead = function writeHead(statusCode, reason, headers) {
  // Do nothing
};

res.prototype.setHeader = function setHeader(name, value) {
  this.headers[name] = value;
};

res.prototype.getHeader = function getHeader(name) {
  return this.headers[name];
};

res.prototype.removeHeader = function removeHeader(name) {
  delete this.headers[name];
};

res.prototype.write = function write(chunk, encoding) {
  this.emit("data", chunk);
};

res.prototype.addTrailers = function addTrailers(headers) {

};

res.prototype.end = function end(data) {
  if(data) this.write(data);
  this.emit("end");
};

res.prototype.sendDate = function sendDate() {
  // Do nothing
};

res.__defineGetter__('readable', function() {
  return true;
});