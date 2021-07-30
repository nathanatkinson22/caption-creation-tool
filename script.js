$(function () {
 
  var $div = $('#output');
  var $title = $('#filename');
    // var origTxt = $div.html();    

    $('.fold').click(function () {
        // var cols = $('#widthSelect').val();
      var origTxt = $('#captionTxt').val().replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g," ");
      var titleTxt = $('#file-name').val();
        var cols = 42;
        var isSmart = $(this).attr('id') === 'ws';
        var lines = fold(origTxt, cols, isSmart);
        // $div.html(lines.join('<br/>'));
        $div.html(lines.join('<br/>'));
        $title.html(titleTxt);
      console.log(lines);
    });

});

function fold(s, n, useSpaces, a) {
    a = a || [];
    if (s.length <= n) {
        a.push(s.trim());
        return a;
    }
    var line = s.substring(0, n).trim();

        var lastSpaceRgx = /\s(?!.*\s)/;
        var idx = line.search(lastSpaceRgx);
        var nextIdx = n;
        if (idx > 0) {
            line = line.substring(0, idx);
            nextIdx = idx;
        }
        a.push(line.trim() +"\n");
        return fold(s.substring(nextIdx), n, useSpaces, a);
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);

  console.log(fileName + fileText);
}

document.getElementById("download-btn").addEventListener("click", function(){
  var fileTextData = document.getElementById('output').innerHTML;
  var fileText = fileTextData.replace(/<br\s*[\/]?>/gi, "\n");
  var fileName = document.getElementById('filename').innerHTML;
    
    download(fileName + " Captions TXT.txt", fileText);
}, false);
