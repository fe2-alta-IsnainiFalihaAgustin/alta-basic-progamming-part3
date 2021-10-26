

function cetakTablePerkalian(number) {
    let result ="\ncetakTableperkalian(9)\n\n";
    for (let i=1; i<=9; i++){
        for(let j=1; j<=9; j++){
            result +=(i*j) + " "; 
    
        }
        result +="\n"
    }
return result
}
console.log(cetakTablePerkalian(9))