


window.addEventListener('load', function(){
    // const userExists= require('../../server/services/userExists.js')
    const fullname= document.querySelector('#fullname')
    const email= document.querySelector('#email');
    const password=document.querySelector('#password');
    let collection = document.querySelectorAll('.warning');
        

    const form = document.querySelector('#signup');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        collection[0].innerHTML="";
        collection[1].innerHTML="";
        collection[2].innerHTML="";
        let emailInput = email.value.trim();
        let passwordInput = password.value.trim();
        let fullnameInput = fullname.value.trim();
        let inputOK=true;
        

        if(emailInput==="")
        {
            collection[1].innerHTML="Email is required";
            inputOK=false;
            
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
            inputOK=false;
                 
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
            inputOK=false;
        }


        if(inputOK)
        {
            var request = new XMLHttpRequest();
            request.open("POST",'/register', true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(`fullname=${fullnameInput}&email=${emailInput}&password=${passwordInput}`)

            request.onreadystatechange = function ()
            {
                if(this.status==400)
                {
                    collection[0].innerHTML=(this.responseText);   
               
                    
                }else{
                    location.href='../login'
                }
            }

            

 

            

            

        }
       
    })



})


