function UserServiceClient(){
    this.findAllUsers=findAllUsers;
    var self=this;

    function findAllUsers(){
        return fetch("http://localhost:8080/api/user")
            .then(function (response){
                return response.json();
        })
    }
}