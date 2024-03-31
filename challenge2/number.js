function numberRange(firstnum, lastnum) {
    // We use if and else to check if difference between firstnum and lastnum is 0
  if (firstnum - lastnum == 0) {
    return [firstnum];
  } else {
    let num = numberRange(firstnum, lastnum - 1);
    // we then push our last number into the num array
    num.push(lastnum);
    return num;
  }
}

console.log(numberRange(4, 7));
