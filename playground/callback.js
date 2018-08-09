

const getUser = (id, callback) => {

    var user = {
        id,
        name: 'omar'
    };
   setTimeout(() => {
    callback(user);
   }, 3000);

}


getUser(22, (userObjec) => {

    console.log(userObjec);

});