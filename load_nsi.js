function load_js_file(js_file) {
    var script = document.createElement('script');
    script.src = js_file;
    script.type = 'text/javascript';
    script.crossOrigin = "anonymous";
    print(script.outerHTML);
}

function load_md(url){
    var container = "content_md_" + Math.floor(Math.random() * 1000);
    print("<div id=\"" + container + "\"> & nbsp;</div>");
    $.get(url, // url
        function (data, textStatus, jqXHR) {  // success callback
        document.getElementById(container).innerHTML = marked(data);
    });
}

function load_py(url){
    var basthon_url = "https://console.basthon.fr/?from=" + url;
    print("<iframe src=\"" + basthon_url + "\"></iframe>");
}