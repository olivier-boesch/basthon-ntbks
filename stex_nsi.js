/*
 * Load notebook, md and python files from nsi git
 */

function base_url_for_nsi(){
    return "https://raw.githubusercontent.com/olivier-boesch/nsi-md/main/"
}

function load_md(md_file){
    var md_url = base_url_for_nsi() + md_file
    var container_name = "content_md_" + Math.floor(Math.random() * 1000);
    console.log("container is " + container);
    var container = document.createElement('div');
    container.id = container_name
    console.log("try to load " + md_url);
    $.get(md_url)
        .done(function (data) {  // success callback
              container.innerHTML = marked(data);
              document.write(container.outerHTML);
    });
}

function load_basthon(type, doc_file,height, width = '100%'){
    var doc_url = base_url_for_nsi() + doc_file
    var basthon_url = "https://"+ type +".basthon.fr/?from=" + doc_url;
    var frame = document.createElement('iframe');
    frame.src = basthon_url;
    frame.width = width;
    frame.height = height;
    document.writeln(frame.outerHTML);
}

function load_py(py_file, height, width='100%'){
    load_basthon('console', py_file, height, width);
}

function load_notebook(ntbk_file, height, width='100%'){
    load_basthon('notebook', ntbk_file, height, width);
}

