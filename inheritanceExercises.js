// function inherits() {}
// Surrogate.prototype = SuperClass.prototype;
// Subclass.prototype = new Surrogate();
// Subclass.prototype.constructor = Subclass;
Function.prototype.inherits = function(SuperClass) {
  function Surrogate() {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// function MovingObject ()

Function.prototype.inherits = function(SuperClass) {
  this.prototype = Object.create(SuperClass.prototype);
  this.prototype.constructor = this;
};
