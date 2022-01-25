let text =
  "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";
let text2 =
  "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...";
let text3 =
  "Curabitur iaculis, nisl ut tristique fringilla, orci purus rutrum arcu, sed pharetra lectus tortor eget orci.";

const words = [text, text2, text3];

for (let i = 0; i < words.length; i++) {
  text = words[i];
  bigText = convertUpper(words[i]);
  longest_word = longestWord(words[i]);
  vcount = vowelCount(words[i]);

  console.log(
    `The original string was:\n${text}\n\nCapitalizing each word looks like:\n${bigText}\nThe longest word is: ${longest_word}\nThere are ${vcount} vowels\n..........................................\n`
  );
}

//convert the first letter of each word to upper case
function convertUpper(inputText) {
  let array1 = inputText.split(" ");
  let newarray1 = [];

  for (let x = 0; x < array1.length; x++) {
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newarray1.join(" ");
}

//find the longest word
function longestWord(inputText) {
  array1 = inputText.match(/\w[a-z]{0,}/gi);
  let longest_word = array1[0];

  for (let x = 1; x < array1.length; x++) {
    if (longest_word.length < array1[x].length) {
      longest_word = array1[x];
    }
  }
  return longest_word;
}

//count number of vowels
function vowelCount(inputText) {
  let vowel_list = "aeiouAEIOU";
  let vcount = 0;

  for (let x = 0; x < inputText.length; x++) {
    if (vowel_list.indexOf(inputText[x]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}
