// 2. Create another file, write a function there and export it and import it in the first file. It could be
// anything, maybe prime number finder. It checks whether a number passed is prime or not.
// (Don't use this example, use some other example).



export function largest(n1 , n2 , n3){
    let l = (n1 > n2) ? (n1 > n3 ? n1 : n3) : (n2 > n3 ? n2 : n3) 
    return l
}

// console.log(largest(6,3,8))