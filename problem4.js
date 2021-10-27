let result= ""
let x
let y
let z

function ubahHuruf(sentence) {

    let ubah = sentence.split("")
    for (let i = 0; i < sentence.length; i++) {

        x = ubah[i].charCodeAt()+10

        if (x > 90) {
            y = x - 90
            z = 64 + y
            result += String.fromCharCode(z)

        } else if (x - 10 == 32) {
            result += String.fromCharCode(x-10)
        } else {
            result += String.fromCharCode(x)
        }
    }
    return result
}

console.log(ubahHuruf("SEPULSA OKE"))     // COZEVCK YUO