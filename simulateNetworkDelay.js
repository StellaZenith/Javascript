function getUsers(callback){
    //simulate network delay
    setTimeout(() =>{
        const user = ['john', 'Jack', 'Abigail'];

        callback(user)
    }, 3000);
}
function userCallback(user){
    console.log(user);
}

getUsers(userCallback);
