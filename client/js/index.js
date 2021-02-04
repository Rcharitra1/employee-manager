window.addEventListener('load', function(e)
{
    const url = "http://localhost:3500/api/v1/employees";
    async function getData ()
    {
        const req = await fetch(url);
        const res = await req.json();

        console.log(res);
    }

    getData();
})