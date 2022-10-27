// (1) Rotate Array
// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4]. How many different ways do you know to solve this problem?
const rotateArray=(array=[],k) => {
    const newArry=[]
    for(let i=array.length-k;i<array.length;i++) {
        newArry.push(array[i])
    }
    for(let i=0;i<array.length-k;i++) {
        newArry.push(array[i])

    }
    console.log(newArry)
}
rotateArray([1,2,3,4,5,6,7],1)
