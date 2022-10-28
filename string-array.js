// (1) Rotate Array
// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4]. How many different ways do you know to solve this problem?

const rotateArray=(array=[],k) => {
    // intermidiate array
    // Space: O(n), time: O(n)
    const newArry=[]
    for(let i=array.length-k;i<array.length;i++) {
        newArry.push(array[i])
    }
    for(let i=0;i<array.length-k;i++) {
        newArry.push(array[i])

    }
    console.log(newArry)

    // Bubble sort method
    // Space: O(1), time: O(nk)
    for(let j=0;j<k;j++) {
        for(let i=array.length-1;i>0;i--) {
            let temp=array[i]
            array[i]=array[i-1]
            array[i-1]=temp
        }
    }
    console.log(array)
}
// rotateArray([1,2,3,4,5,6,7],4)

// Reverse words in a string
const reversWords=(str) => {

    const strArray=str.split(' ')
    console.log(strArray.reverse().join(' '))

    let i=0
    for(let j=0;j<str.length;i++) {
        if(str[j]==' ') {
            reverse(str,i,j-1)
            i=j+1
        }
    }

    reverse(str,i,atr.length-1)
    reverse(str,0,str.length-1)

    console.log(str)
}

function reverse(s,i,j) {
    while(i<j) {
        let temp=s[i]
        s[i]=s[j]
        s[j]=temp
        i++
        j--
    }
}

// reversWords('The sky is blue')
