function meanMedian(numbers) {

    var total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    mean = total/numbers.length;

  
    var Median = 0; 
    num = numbers.length;

    if (num%2 === 0) {
        Median = (numbers[num/2] + numbers[(num/2)-1])/2;
    } else {
        Median = numbers[(num-1)/2];
    }
    return String(mean) + " " + String(Median);
}

console.log(meanMedian([1, 2, 3, 4]))  
console.log(meanMedian([1, 2, 3, 4, 5]))      
console.log(meanMedian([7, 8, 9, 13, 15]))    
console.log(meanMedian([10, 20, 30, 40, 50])) 
console.log(meanMedian([15, 20, 30, 60, 120]))