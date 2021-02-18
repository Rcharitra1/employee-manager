

window.addEventListener('load', function(){

    const email= document.querySelector('#email');
    const password=document.querySelector('#password');
    let collection = document.querySelectorAll('.warning');
        collection[0].innerHTML="";
        collection[1].innerHTML="";

    const form = document.querySelector('#login');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let emailInput = email.value.trim();
        let passwordInput = password.value.trim();

        

        if(emailInput==="")
        {
            collection[0].innerHTML="Email is required";
            
        }
        if(passwordInput==="" || passwordInput.length<6 || passwordInput.length>10)
        {
            if(passwordInput==="")
            {
                collection[1].innerHTML="Password is required"
            }else
            {
                collection[1].innerHTML="Password is between 6-10 characters"
            }
            
            
        }
       
    })



})


