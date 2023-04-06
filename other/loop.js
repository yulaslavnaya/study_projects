let n=-3
let m=-10
let count=10

a = []

if (n<m){
    for(let i = 0; i < count; ++i){
        a.push(Math.floor(Math.random() *(m - n + 1) + n))
    }
}
else if(m<n){
    for(let i = 0; i < count; ++i){
        a.push(Math.floor(Math.random() *(n - m + 1) + m))
    }
}

console.log(a)