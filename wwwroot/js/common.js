$.ajaxSetup({
    crossDomain: true,
    xhrFields: {
        withCredentials: true
    }
});
function get_root() {

    //return "http://localhost:8080/";
    return "https://ashrae-viewer.azurewebsites.net/";
    //return "http://ashrae.biimport.com/";
}


function get_root_Api() {

    return "http://localhost:8786/";
    //return "https://ashrae-api.azurewebsites.net/";
    //return "http://biimport.com/";
}

function pop_info_go(title, text, url) {
    Swal.fire({
        title: title,
        text: text
    }).then((result) => {
        window.location.href = url;
    })
}
function pop_info(title, text) {
    Swal.fire({
        title: title,
        text: text
    });
}

function login(username, pwd, token){
    return $.ajax({
        type: 'POST',
        url: get_root_Api() + 'Login',
        data: {
            username: username,
            password: pwd,
            token: token
        },
        success: function (data) {
            localStorage.setItem("token", data['token']);
        },
        error: function (error) {
            pop_info("Error", "Incorrect Username or Password");
        }
    });
}
function get_token() {
    var token = localStorage.getItem("token");
    return token;
}
function clear_token() {
    localStorage.removeItem("token");
}
function get_user_info(userId) {
    return $.ajax({
        type: 'GET',
        url: get_root_Api() + 'api/GetUserInfo',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', get_token());
        },
        data: {
            "userId": userId
        },
        success: function (data) {
          
        },
        error: function (error) {
            process_error(error);
        }
    });
}

function process_error(data) {
    if (data['status'] === 401) {
        window.location.href = "./login" + "?redirect=" + encodeURIComponent(window.location.href);
    } else{
        pop_info("Error", data['responseJSON']['message']);
    }
}

function logout() {
    return $.ajax({
        type: 'POST',
        url: get_root_Api() + 'Logout',
        success: function (data) {
            clear_token();
        }
    });
}

function readFileContent(file) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result)
        reader.onerror = error => reject(error)
        reader.readAsText(file)
    })
}
