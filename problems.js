function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let oddIndicesValues=[]
    for(let i=1; i<arr.length; i+=2){
        oddIndicesValues.push(arr[i]);
    }
    return oddIndicesValues;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let reverseOddIndicesValues= [];
    let i;
    if(arr.length%2==0){
        i=arr.length-1;
    }else{
        i= arr.length-2;
    }
    for (; i>=1; i-=2){
        reverseOddIndicesValues.push(arr[i]);
    }
    return reverseOddIndicesValues;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let powersValues= []
    for(let i=0; Math.pow(2, i)< arr.length; i++){
        powersValues.push(arr[Math.pow(2, i)]);
    }
    return powersValues;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let powersValues= []
    for(let i=0; Math.pow(n, i)< arr.length; i++){
        powersValues.push(arr[Math.pow(n, i)]);
    }
    return powersValues;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let midIndex= Math.floor(arr.length/2)
    if(arr.length%2==0)

        return arr.slice(0, midIndex);
    return arr.slice(0, midIndex+1);
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let midIndex= Math.floor(arr.length/2)
    if(arr.length%2==0)

        return arr.slice(midIndex);
    return arr.slice(midIndex+1);
}


module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
