function findLongestString(arr) {
    let max = 0;
    let longestWords = [];
    arr.forEach(word => {

        if (word.length > max) {
            longestWords = [word];
            max = word.length;
        } else if (word.length == max) longestWords.push(word)

    });

    console.log(longestWords);
}


findLongestString(arr = ["car", "cart", "box", "base", "dog", "duck", "animal"]);
findLongestString(arr = ["car", "cart", "box", "base", "dog", "duck"]);