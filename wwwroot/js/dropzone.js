//// Dropzone
//$(function () {
//    Dropzone.autoDiscover = false;
//});
//function init_dropzone(ele_id) {
//    console.log(ele_id);
//    $('#' + ele_id).dropzone({
//        parallelUploads: 2,
//        maxFilesize: 1,
//        filesizeBase: 1000,
//        addRemoveLinks: true
//    });

//    // Mock the file upload progress (only for the demo)
//    //
//    Dropzone.prototype.uploadFiles = function (files) {
//        var minSteps = 6;
//        var maxSteps = 60;
//        var timeBetweenSteps = 100;
//        var bytesPerStep = 100000;
//        var isUploadSuccess = Math.round(Math.random());

//        var self = this;

//        for (var i = 0; i < files.length; i++) {

//            var file = files[i];
//            var totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

//            for (var step = 0; step < totalSteps; step++) {
//                var duration = timeBetweenSteps * (step + 1);

//                setTimeout(function (file, totalSteps, step) {
//                    return function () {
//                        file.upload = {
//                            progress: 100 * (step + 1) / totalSteps,
//                            total: file.size,
//                            bytesSent: (step + 1) * file.size / totalSteps
//                        };

//                        self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
//                        if (file.upload.progress == 100) {

//                            if (isUploadSuccess) {
//                                file.status = Dropzone.SUCCESS;
//                                self.emit('success', file, 'success', null);
//                            } else {
//                                file.status = Dropzone.ERROR;
//                                self.emit('error', file, 'Some upload error', null);
//                            }

//                            self.emit('complete', file);
//                            self.processQueue();
//                        }
//                    };
//                }(file, totalSteps, step), duration);
//            }
//        }
//    };
//}
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
