


window.addEventListener('load', function(){
    const email= document.querySelector('#email');
    const password=document.querySelector('#password');
    let collection = document.querySelectorAll('.warning');
        


    const form = document.querySelector('#login');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        collection[0].innerHTML="";
        collection[1].innerHTML="";
        let emailInput = email.value.trim();
        let passwordInput = password.value.trim();

        let inputOK= true;

        if(emailInput==="")
        {
            collection[0].innerHTML="Email is required";
            inputOK=false;
            
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
            inputOK=false;
            
            
        }

        if(inputOK)
        {
            var request = new XMLHttpRequest();
            
            request.open("POST",'/api/login', true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(`email=${emailInput}&password=${passwordInput}`)
  
            request.onreadystatechange = function ()
            {
                if(this.status==400)
                {
                    collection[0].innerHTML=(this.responseText);   
               
                    
                }
            }

        }
        
        
        
    })



})


