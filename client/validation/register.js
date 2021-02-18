


window.addEventListener('load', function(){

    const fullname= document.querySelector('#fullname')
    const email= document.querySelector('#email');
    const password=document.querySelector('#password');
    let collection = document.querySelectorAll('.warning');
        collection[0].innerHTML="";
        collection[1].innerHTML="";
        collection[2].innerHTML="";

    const form = document.querySelector('#signup');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let emailInput = email.value.trim();
        let passwordInput = password.value.trim();
        let fullnameInput = fullname.value.trim();

        

        if(emailInput==="")
        {
            collection[1].innerHTML="Email is required";
            
        }
        if(passwordInput==="" || passwordInput.length<6 || passwordInput.length>10)
        {
            if(passwordInput==="")
            {
                collection[2].innerHTML="Password is required"
            }else
            {
                collection[2].innerHTML="Password is between 6-10 characters"
            }
                 
        }

        if(fullnameInput==="" || fullnameInput.length<1 || fullnameInput.length>30)
        {
            if(fullnameInput==="")
            {
                collection[0].innerHTML="full name is required"
            }else
            {
                collection[0].innerHTML="full name is between 1-30 characters"
            }
        }
       
    })



})


