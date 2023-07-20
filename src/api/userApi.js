import {API} from "../config"

export const userRegister = (username,email,password) =>{
    let user = {username,email,password}
    return fetch(`${API}/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
})
.then(res=>res.json())
.catch(err=>console.log(err))
}

//signin
export const signIn = (email,password) =>{
    let user ={email,password}
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

//to keep signed in

export const authenticate =(data)=>{
    localStorage.setItem('jwt',JSON.stringify(data))
}