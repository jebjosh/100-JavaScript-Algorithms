//Find the smallest median value of a sorted Array

function getMedian(arr) {

    // console.log(arr)

    length = arr.length;


    return length % 2 == 0 ? arr[(length / 2) - 1] : arr[Math.floor(length / 2)];
}

console.log(getMedian([1, 2, 3, 4]));
console.log(getMedian([1, 2, 3, 4, 5]));
console.log(getMedian([10, 12, 33, 48, 50]));