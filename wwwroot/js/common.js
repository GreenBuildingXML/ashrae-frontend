$.ajaxSetup({
    crossDomain: true,
    xhrFields: {
        withCredentials: true
    }
});

function get_root() {

    //return "http://localhost:8080/";
    return "https://asharea-viewer.azurewebsites.net/";
}


function get_root_Api() {

    return "http://localhost:8786/";
    //return "https://asharea-api.azurewebsites.net/";
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


function get_user_info(userId) {
    return $.ajax({
        type: 'GET',
        url: get_root_Api() + 'api/GetUserInfo',
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
    console.log(data);
    if (data['status'] === 401) {
        window.location.href = "./login.html" + "?redirect=" + encodeURIComponent(window.location.href);
    } else{
        pop_info("Error", data['responseJSON']['message']);
    }
}

function logout() {
    return $.ajax({
        type: 'POST',
        url: get_root_Api() + 'Logout',
        success: function (data) {
        }
    });
}
