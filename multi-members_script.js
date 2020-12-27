// indexnum variable accepts the index value for selected profile
function displaybio(indexnum) {
    var docHandle = document.querySelectorAll(".bio");
    console.log(docHandle);
    var len = docHandle.length;

    // console.log("user clicked on position: ", indexnum);
    // console.log("clicked position profile details: ", docHandle[indexnum]);


    // to check if selected profile bio is already open
    if (docHandle[indexnum].classList.contains("inactive")) {
        docHandle[indexnum].classList.remove("inactive");
        docHandle[indexnum].classList.add("active");

        // once selected profile opens, call function to close any other open bios

        profilesIteration(indexnum, docHandle, len);
    }

    // if selected profile bio is already open
    else {
        docHandle[indexnum].classList.remove("active");
        docHandle[indexnum].classList.add("inactive");
    }
}


// to check other profiles on page
function profilesIteration(indexnum, docHandle, len) {
    var i;
    for (i = 0; i <= len - 1; i++) {
        if (i === indexnum) {
            continue;
        }
        if (docHandle[i].classList.contains("active")) {
            docHandle[i].classList.remove("active");
            docHandle[i].classList.add("inactive");
        }
    }
}