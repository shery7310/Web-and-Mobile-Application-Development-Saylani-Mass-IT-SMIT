let marks;
marks = prompt("Please enter you marks");

// function myFunction() {
//     var condition;
//     if (marks >=90){
//         condition = "You got A+"
//     }
    
//     else if (marks >=80){
//         condition = "You got A"
//     }
    
//     else if (marks >=70){
//         condition = "You got B"
//     }
    
//     else if (marks <70){
//         condition = "You have failed"
//     }

//     document.getElementById("marks").innerHTML = condition;
//     alert(condition);
//   }
let condition;

if (marks >=90){
        condition = "You got A+"
    }
    
else if (marks >=80){
        condition = "You got A"
    }
    
else if (marks >=70){
        condition = "You got B"
    }
    
else if (marks <70){
        condition = "You have failed"
    }

document.getElementById("marks").innerHTML = condition;
    alert(condition);

