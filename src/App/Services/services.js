export async function login(emailId, userPassword){
    try{
        const req = await fetch('http://localhost:3001/user/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                email: emailId,
                password: userPassword
            })
        });
        const res = await req.json()
        
        return res;
        
    }catch (e){
        console.log(e)
    }
}