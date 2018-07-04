(function (){
    $(init);
    var userService =  new UserServiceClient();
    function init(){
        $tbody=$(".table-body");
        findAllUsers();
    }

    function findAllUsers(){
        userService
            .findAllUsers()
            .then(renderUsers);
    }

    function renderUsers(users){
        $tbody.empty();
        for(i=0;i<users.length;i++) {
            $tbody.append("<tr id="+users[i].id+">" +
                "<td>"+users[i].username+"</td>" +
                "<td>"+users[i].firstName+"</td>" +
                "<td>"+users[i].lastName+"</td>" +
                "<td>"+users[i].college+"</td>" +
                "<td>"+users[i].graduationDate.slice(0,10)+"</td>" +
                "<td><button class='btn btn-primary'>Edit</button></td>"+
                "<td><button class='btn btn-danger'>Delete</button></td>"+
                "</tr>")
        }
    }

})();
