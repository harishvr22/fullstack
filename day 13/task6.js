function bmi(w,h){
    var ans = w/(h*h);
    if (ans<18.5){
        console.log("Your BMI is "+Math.round(ans)+" you are in under height");
    }
}
let mes =bmi(60,1.7)