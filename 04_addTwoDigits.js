//Given 29 it will   be 11, 11 would be 2 because 1+1 = 2 and 2+9 = 11


function num(n) {


    let nums = n.toString().split("");


    // total = 0;
    // nums.forEach(element => {
    //     total += parseInt(element);
    // });

    // let total = nums.reduce((a, b) => {

    //     return parseInt(a) + parseInt(b);
    // })


    console.log(`${nums[0]} + ${nums[1]} = ${parseInt(nums[0]) + parseInt(nums[1])}`);

}


num(29);
num(11);