function get_software() {
    return $.ajax({
        type: 'GET',
        url: get_root_Api() + 'api/GetSoftwares',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', get_token());
        },
        data: {},
        success: function (data) {
        },
        error: function (error) {
            process_error(error);
        }
    });
}
function get_one_software(id) {
    return $.ajax({
        type: 'GET',
        url: get_root_Api() + 'api/GetSoftware',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', get_token());
        },
        data: {
            id: id
        },
        success: function (data) {
        },
        error: function (error) {
            process_error(error);
        }
    });
}

function add_software(name, desc, version) {
    return $.ajax({
        type: 'POST',
        url: get_root_Api() + 'api/AddSoftware',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', get_token());
        },
        data: {
            name: name,
            description: desc,
            version: version
        },
        success: function (data) {
        },
        error: function (error) {
            process_error(error);
        }
    });
}

function get_certification(id) {
    return $.ajax({
        type: 'GET',
        url: get_root_Api() + 'api/GetCertification',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', get_token());
        },
        data: {
            id: id
        },
        success: function (data) {
        },
        error: function (error) {
            process_error(error);
        }
    });
}

function update_certification_lv1(id) {
    return $.ajax({
        type: 'PUT',
        url: get_root_Api() + 'api/PassedLevel1',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', get_token());
        },
        data: {
            id: id
        },
        success: function (data) {
        },
        error: function (error) {
            process_error(error);
        }
    });
}

function update_certification_lv2(id, test_case_id, status) {
    return $.ajax({
        type: 'PUT',
        url: get_root_Api() + 'api/ValidateLevel2',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', get_token());
        },
        data: {
            id: id,
            testCaseId: test_case_id,
            status: status
        },
        success: function (data) {
        },
        error: function (error) {
            process_error(error);
        }
    });
}

function upload_gbxml_file(id, test_case_id, files) {
    let forms = assemble_file_upload_formdata_separate(files);
    let form = forms[0];
    let data = form['form'];
    data.append('id', id);
    data.append('testName', test_case_id);
    return $.ajax({
        type: 'POST',
        url: get_root_Api() + 'api/uploadTestgbXMLFile',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', get_token());
        },
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
        },
        error: function (error) {
            process_error(error);
        }
    });
}

function get_gbxml_link(id, test_case_id) {
    return $.ajax({
        type: 'GET',
        url: get_root_Api() + 'api/getTestgbXMLFile',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', get_token());
        },
        data: {
            id: id,
            testName: test_case_id
        },
        success: function (data) {
        },
        error: function (error) {
            process_error(error);
        }
    });
}

function getCertificationLevel(lv) {
    var level = "N/A";
    switch(lv) {
        case "Lv1":
            level = "Level1";
            break;
        case "Lv2":
            level = "Level2";
            break;
        default:
            break;
    }
    return level;

}