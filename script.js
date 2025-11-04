//Task 1:  Round a Decimal Number

// let num=Number(prompt("Enter any number : "));
// console.log(num)
// console.log(num.toFixed(0))
// console.log(num.toFixed(2))





//Task 2: Generate a Random Number between Two Values

//console.log((Math.random()*10+10).toFixed(0))





//Task 3:Sum of Digits of a Number

// let a=parseInt(prompt("Enter any number : "));
// let b=Math.abs(a)
// let c=b.toString()
// let count=0;
// for (i=0;i<c.length;i++){
//   count+=parseInt(c[i])
// }
// console.log(count)



//Task 4: Format a Number as Currency

// let rupees = prompt("Enter your amount :");
// let num = Number(rupees);  // convert string to number
// let newNum = "₹" + num.toLocaleString('en-IN');
// console.log(`Ans: Formatted amount: ${newNum}`);






//Task 5: Calculate Compound Interest

// let P=parseInt(prompt("Enter your Principal amount: "))
// let R=parseInt(prompt("Enter your Rate of interest: "))
// let T=parseInt(prompt("Enter your Time (in years) :"))

// function total(P,R,T){
//     return (`The total amount is ${A=P*(1+R/100)**T}`)
// }
// console.log(total(P,R,T));

// function compound(P,A){
//     console.log(`The compound intrest is ${A-P}`)
// }
// compound(P,A)





//Task 6: Convert Case and Reverse a String

// let word = prompt("Enter any word : ");
// let reverse =""
// console.log(word.toUpperCase())
// for(i=word.length-1;i>=0;i--){
//     reverse+=word[i]
// }
// console.log(reverse)





//Task 7: Check for Palindrome


// let word = prompt("Enter any word : ");;
// let reverse =""
// for(i=word.length-1;i>=0;i--){
//     reverse+=word[i]
// }
// console.log(reverse)
// if(word==reverse){
//     console.log("Is palindrome -True")
// }
// else{
//     console.log("Is palindrome -False")
// }





//Task 8:Count the Occurrences of a Word

// let word = prompt("Enter any word : ");
// let sentence= prompt("Enter any sentence : ");
// let count=0
// for(i=0;i<=sentence.length;i++){
// if(word.split(" ")==sentence.split(" ")[i]){
//     count+=1
// }
// }
// console.log(`The total count is ${count}`)





//Task 9: Capitalize the First Letter of Each Word

// let sentence =  prompt("Enter any sentence : ");;
// let gap=sentence.split(" ");
// let word=""
// for(i=0;i<gap.length;i++){
//     let space=gap[i]
//     for(j=0;j<space.length;j++){
//         if(j==0){
//             word+=space[j].toUpperCase()
//         }
//          else{
//             word+=space[j]
//         }
//     }
//     word+=" "
// }
// console.log(word)




//Task : 10.Remove Duplicate Characters

// let text =  prompt("Enter any word : ");
// let duplicate=""
// for(i=0;i<text.length;i++){
// if(!duplicate.includes(text[i])){
//      duplicate+=text[i]
// }
// }
// console.log(duplicate)