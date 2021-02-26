

window.addEventListener('load', 
function(e)
{

    // var request = new XMLHttpRequest();
    // request.open('GET', '/api/users', true);
    // request.send();

    async function getUsers()
    {
        let req = await fetch('/api/users');
        let res = await req.json();

        let objArray = [...res];

        // console.log(objArray)

        let parent = document.querySelector('.content');

        if(objArray.length>0)
        {
            objArray.forEach(obj=>{

                let template = `
                <div data-id=${obj.id}>
                <img src="../assets/svgs/user.svg"/>
                <p>Name: ${obj.username}</p>
                <p>Email: ${obj.email}</p>
                </div>
                `
                parent.insertAdjacentHTML('afterbegin', template)
            })
        }else
        {
            let noData = `<div class="noData"><p>No users to display</p></div>`;

            parent.insertAdjacentHTML('afterbegin', noData);
        }
        
    }



    getUsers();
    
})
