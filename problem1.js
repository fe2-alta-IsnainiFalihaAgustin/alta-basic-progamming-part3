function playWithAsterik(n) {
    let result = "";
    for (let i = n; i>=0; i--) {
        for (let x = 0; x < i; x++) {
            result += " "
        }
        for (let y = n -1; y >= i; y--) {
            result += "* "
        }
            result += "\n"

    }
    return result;

}
console.log(playWithAsterik(5))