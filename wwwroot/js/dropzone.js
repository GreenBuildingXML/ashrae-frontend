$(function () {
    Dropzone.autoDiscover = false;
});

function init_dropzone(ele_id, is_multi, drop_callback) {
    let dropZone = document.getElementById(ele_id);

    if (!dropZone.dropzone) {
        new Dropzone("#" + ele_id);
    }

    dropZone.dropzone.options.addRemoveLinks = true;
    dropZone.dropzone.options.maxFilesize = 500;
    dropZone.dropzone.options.autoProcessQueue = false;
    dropZone.dropzone.on("error", function (file) {
        if (!file.accepted) this.removeFile(file);
    });
    
    function showDropZone() {
        dropZone.style.display = "block";
    }

    function hideDropZone() {
        dropZone.style.display = "none";
    }

    function allowDrag(e) {
        if (e) {
            e.preventDefault();
        }
    }

    function handel_new_file(add_files) {
        let files = dropZone.dropzone.files;
        let add = files.length > 0 && files[files.length - 1].name === add_files[add_files.length - 1].name;
        clear_dz_files(files);

        let file = add_files ? add_files[0] : files[files.length - 1];
        if (drop_callback) {
            drop_callback(file);
        } else if (add) {
            dropZone.dropzone.addFile(file);
        }
    }

    function clear_dz_files(files) {
        if (!files) {
            files = dropZone.dropzone.files;
        }
        if (files && files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                dropZone.dropzone.removeFile(files[i]);
            }
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        if (drop_callback) {
            clear_dz_files();
        } else if (!is_multi) {
            let files = dropZone.dropzone.files;
            if (files && files.length > 0) {
                for (let i = 1; i < files.length; i++) {
                    dropZone.dropzone.removeFile(files[i]);
                }
            }
        }
    }

    window.addEventListener('dragenter', function (e) {
        showDropZone();
    });
    dropZone.addEventListener('dragenter', allowDrag);
    dropZone.addEventListener('dragover', allowDrag);
    dropZone.addEventListener('dragleave', function (e) {
        // hideDropZone();
    });
    dropZone.addEventListener('drop', handleDrop);
    dropZone.dropzone.on('addedfiles', function (files) {
        let dz_files = dropZone.dropzone.files;
        if (dz_files && dz_files.length === 0 && !files) {
            pop_info("", "Please drop a file");
            return;
        }
        if (!is_multi) {
            handel_new_file(files);
        }
        let file = dz_files[0];
        var ext = file.name.split('.').pop();
        if (ext == "gbxml" || ext == "xml") {
            $(file.previewElement).find(".dz-thumbnail img").attr("src", "/imgs/icons/xml.svg");
        }
    });
    
}


function collect_file_into_formdata(dropzone_id) {
    let form_data = new FormData();
    let dropzone = document.getElementById(dropzone_id).dropzone;
    let files = dropzone.files;
    for (let i = 0; i < files.length; i++) {
        form_data.append("file_" + i, files[i]);
    }
    form_data.append("file_num", files.length);

    return form_data;
}

function collect_file_into_array(dropzone_id) {
    let dropzone = document.getElementById(dropzone_id).dropzone;
    return dropzone.files;
}

function clear_dropzone(id) {
    let dropzone = document.getElementById(id).dropzone;
    let files = dropzone.files;
    if (files && files.length > 0) {
        $.each(files, function (i, v) {
            dropzone.removeFile(v);
        });
    }
}
