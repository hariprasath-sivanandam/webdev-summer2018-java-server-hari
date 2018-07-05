function UserServiceClient(){
    this.findAllUsers=findAllUsers;
    var self=this;

    function findAllUsers(){
        return fetch("/api/user")
            .then(function (response){
                return response.json();
        })
    }
}