function changeCase(sentence) {
    // We split using the split method
    let letters = sentence.split("");
    //  we use the for of loop
    //we then create an empty array
    let array = [""];
    for (let letter of letters) {
      // check out
      if (letter === letter.toUpperCase()) {
        array.push(letter.toLowerCase());
      } else {
        array.push(letter.toUpperCase());
      }
    }
    return array.join("");
  }
  
  console.log(changeCase("The Quick Brown Fox"))
  
  