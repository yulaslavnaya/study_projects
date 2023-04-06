roadMines =[false, false, false, false, false, false, false, false, false, false] 
let attemps = 2
let curattemps = 0 

for(let i = 0; i < 10; ++i){
    position = i+1
    console.log(`танк переместился на ${position}`)
    if (roadMines[i]){
        curattemps++
        if (curattemps == 1){
            console.log(`танк повреждён`)
        }else{
            console.log(`танк уничтожен`)
            break
        }
    }
}