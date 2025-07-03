function uploadProject() {
    return new Promise(function (resolve, reject) {
        let state = true;
        if (state) {
            resolve(state);
        }
        else {
            reject("something went wrong");
        }
    });
};
console.log(uploadProject());

uploadProject().then(
    function (projectState) {
        console.log("Good Job", projectState);
    }).then(
        function () {
            console.log("Hfg");
        }).catch(function (error) {
            console.log("Try Again", error);

        })

function getUserData() {
    fetch("https://randomuser.me/api/")
        .then((data) => {
            var res = data.json();
            console.log(res);
            return res;
        }).then((res) => {
            console.log(res);
            var user_data = res.results;
            console.log(user_data);
            var user_name = user_data[0].name;
            console.log(user_name);
            let { title, first, last } = user_name;
            document.getElementById('user-name').innerText = `${title} ${first} ${last}`;
            var user_pic = user_data[0].picture.large;
            document.getElementById('profile-pic').src = user_pic;
            var user_dob = user_data[0].dob.date;
            console.log(user_dob);
            let userdob = new Date(user_dob);
            userdob = `${userdob.getDate()}/${userdob.getMonth() + 1}/${userdob.getFullYear()}`;
            console.log(userdob);
            document.getElementById('dob').innerText = userdob;
            var user_gender = user_data[0].gender;
            console.log(user_gender);
            document.getElementById('gender').innerText = user_gender;
            var user_age = user_data[0].dob.age;
            console.log(user_age);
            document.getElementById('age').innerText = user_age;
            var user_email = user_data[0].email;
            console.log(user_email);
            document.getElementById('email').innerText = user_email;
            var user_phone = user_data[0].phone;
            console.log(user_phone);
            document.getElementById('phone').innerText = user_phone;
            var user_street = user_data[0].location.street;
            console.log(user_street);
            let { number, name } = user_street;
            document.getElementById('street').innerText = `${number} ${name}`;
            var user_location = user_data[0].location;
            console.log(user_location);
            let { city, state, country, postcode } = user_location;
            document.getElementById('location').innerText = `City: ${city}\nState: ${state}\nCountry: ${country}\nPostCode: ${postcode}`;
            var user_coordinates = user_data[0].location.coordinates;
            console.log(user_coordinates);
            let { latitude, longitude } = user_coordinates;
            document.getElementById('coordinates').innerText = `Latitude: ${latitude}\n Longitude ${longitude} `;
            var user_timezone = user_data[0].location.timezone;
            console.log(user_timezone);
            let { offset, description } = user_timezone;
            document.getElementById('timezone').innerText = `Offset: ${offset}\n Description: ${description} `;
        }).catch((err) => {
            console.log("Error in api");

        })
}

getUserData();

function new_profile() {
    window.location.reload();
}

function getUserData() {
    fetch("https://randomuser.me/api/")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
        
            if (!data || !data.results || !data.results.length) {
                throw new Error("No user data found");
            }

            const user_data = data.results[0];

            document.getElementById('error_message').style.display = 'none';
            document.getElementById('user_info').style.display = 'grid';

            let { title, first, last } = user_data.name;
            document.getElementById('user-name').innerText = `${title} ${first} ${last}`;
            document.getElementById('profile-pic').src = user_data.picture.large;

            let dob = new Date(user_data.dob.date);
            document.getElementById('dob').innerText = `${dob.getDate()}/${dob.getMonth() + 1}/${dob.getFullYear()}`;

            document.getElementById('gender').innerText = user_data.gender;
            document.getElementById('age').innerText = user_data.dob.age;
            document.getElementById('email').innerText = user_data.email;
            document.getElementById('phone').innerText = user_data.phone;

            let { number, name } = user_data.location.street;
            document.getElementById('street').innerText = `${number} ${name}`;

            let { city, state, country, postcode } = user_data.location;
            document.getElementById('location').innerText = `City: ${city}\nState: ${state}\nCountry: ${country}\nPostCode: ${postcode}`;

            let { latitude, longitude } = user_data.location.coordinates;
            document.getElementById('coordinates').innerText = `Latitude: ${latitude}\nLongitude: ${longitude}`;

            let { offset, description } = user_data.location.timezone;
            document.getElementById('timezone').innerText = `Offset: ${offset}\nDescription: ${description}`;
        })
        .catch(error => {
            console.error("Fetch error:", error);
            document.getElementById('user_info').style.display = 'none';
            document.getElementById('error_message').style.display = 'block';
        });
}