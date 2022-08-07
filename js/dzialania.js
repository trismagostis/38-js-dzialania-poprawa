function calculate(num1,num2){
    if (num1+num2>=0 ) {
        console.log(`wynik dodawania jest równy ${num1+num2}`)   
    }
    else {console.log("Wynik jest nieprawidłowy");}
    if (num1*num2>=0 ) {
        console.log(`wynik mnożenia jest równy ${num1*num2}`)   
    }
    else {console.log("Wynik jest nieprawidłowy");}
    if (num1-num2>=0 ) {
        console.log(`wynik odejmowania jest równy ${num1-num2}`)   
    }
    else {console.log("Wynik jest nieprawidłowy");}
}

calculate(5,6);