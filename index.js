
Array.from(document.querySelectorAll("button"))[0].addEventListener("click", verify);

function verify(){ 
/// verification of empty input 
    const empty = (element) => element.value.length === 0;
    var regex =  new RegExp("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])");

    if(Array.from(document.querySelectorAll("input")).some(empty)){
        alert('please enter your full informations ! ')
    }
    else {
            // email verification including  @ and .
            if  (!(Array.from(document.querySelectorAll("#email"))[0].value.includes('@')) || !(Array.from(document.querySelectorAll("#email"))[0].value.includes('.'))){
            alert('your email is invalid ');
            }
              // email verification  @ and .position
            else if (Array.from(document.querySelectorAll("#email"))[0].value.indexOf('@')> (Array.from(document.querySelectorAll("#email"))[0].value.indexOf('.'))){
            alert('your email format is not correct, verify the placement of . and @')
            }
             // password length 
            else if (Array.from(document.querySelectorAll("#password1"))[0].value.length<8){
                alert('your password length should be higher than8');

            }
              // password format verification 
            else if (regex.test(Array.from(document.querySelectorAll("#password1"))[0].value)) {
                     //password matching verification
                 if(Array.from(document.querySelectorAll("#password1"))[0].value === Array.from(document.querySelectorAll("#password2"))[0].value){
                    alert('matching passwords')

                }
                 else {
                    alert(' passwords dont match')

                }
             }
            else if (!(regex.test(Array.from(document.querySelectorAll("#password1"))[0].value))) {
                alert('the password failed the test');
             }    
    }
}
