//Display a wall of * around string array of the same word length
//i.e. ["jeb", "has", "car"] will be 
// *****
// *jeb*
// *has*
// *car*
// *****

function border(arr) {

    let borderSize = arr.length;
    let borderFrame = "*".repeat(borderSize);

    arr.unshift(borderFrame);
    arr.push(borderFrame);




    arr.forEach(element => {
        console.log("*" + element + "*");
    });

}

let arr2 = ["jeb", "has", "car"];

border(arr2);