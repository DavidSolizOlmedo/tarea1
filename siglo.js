function siglo(x) {
  var y=(x/100)+0.49;
  y=Math.round(y);
  return y;
}
console.log(siglo(1905));
