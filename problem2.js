let hasil = ""
let a = 1
let b = 0

function drawXYZ(high) {

    for (let x =1; x<= high; x++){

        for (let i = a; i <= high + b; i++) {
            if ( i % 3 === 0 ) {
                hasil += "X"
            } else if ( i % 2 === 0 ) {
                hasil += "Z"
            } else {
                hasil += "Y"
            }
                hasil += " "
            }
    
            hasil += "\n"
            a += high
            b += high
        }
        return hasil
    }

console.log(drawXYZ(5))