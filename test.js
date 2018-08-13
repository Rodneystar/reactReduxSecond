let f = function() {
  this.a = 1;
  this.b = 2;

function g() {
    this.a = 3;
    this.b = 4;
    // console.log(this);
  }
console.log(this);
  return this;
}

var x = new f();
console.log(x.a, ' ', x.b);
g();
console.log(x);
// x.g();?
