for (var i = 10; i < 100; i++) {
  var devisableCount = 2;
  for (var x = 0; x <= i / 2; x++) {
    if (i !== 1 && i !== 0 && i !== x) {
      if (i % x === 0) {
        devisableCount++;
      }
    }
  }
  if (devisableCount === 3) {
    console.log(i);
  }
}
