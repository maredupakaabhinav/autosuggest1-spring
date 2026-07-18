// Array of Users

var users = [

    {

        name: "John Doe",

        gender: "Male",

        img: "john.png"

    },

    {

        name: "Jane Doe",

        gender: "Female",

        img: "jane.png"

    }

];

// Current User

var id = 0;

// Toggle User

function toggleUser(){

    id = (id + 1) % 2;

    var userImage = document.getElementById("user-image");

    var userName = document.getElementById("user-name");

    var userGender = document.getElementById("user-gender");

    userImage.src = users[id].img;

    userName.innerHTML = users[id].name;

    userGender.innerHTML = users[id].gender;

}

function randomUser(){
    fetch('https://randomuser.me/api/')
        .then(function(response){
            // convert raw text to json
            return response.json();
        })
        // dom mannipulation with API data
        .then(function(data){

            var userData = data.results[0];

            // 1: image
            var userImage = document.getElementById("user-image");
            userImage.src = userData.picture.large;

            // 2: name
            var userName = document.getElementById("user-name");
            userName.innerHTML = userData.name.first + " " +
                                    userData.name.last;

            // 3: gender
            var userGender = document.getElementById("user-gender");
            userGender.innerHTML = userData.gender;
        })
        // handle error
        .catch(function(err){
            console.log(err);
        })
}