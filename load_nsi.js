function load_js_file(js_file) {
    var script = document.createElement('script');
    script.src = js_file;
    script.type = 'text/javascript';
    script.crossOrigin = "anonymous";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function load_md(url){
    load_js_file('https://code.jquery.com/jquery-3.4.1.min.js');
    load_js_file("https://cdn.jsdelivr.net/npm/marked/marked.min.js")
    print("<div id=\"content_md\">&nbsp;</div>";)
    $.get('https://raw.githubusercontent.com/olivier-boesch/nsi-md/main/test_md.md', // url
        function (data, textStatus, jqXHR) {  // success callback
        document.getElementById('content_md').innerHTML = marked(data);
    });
}

function load_py(url){
    var basthon_url = "https://console.basthon.fr/?from=" + url;
    print("<iframe src=\"" + basthon_url + "\"></iframe>");
}