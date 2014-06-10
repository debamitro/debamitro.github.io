function rollBlinker () {
    var contentItm = document.getElementsByClassName('content').item(0);
    var text = contentItm.textContent;
    var length = text.length;
    var pos = 0;
    var speed = 60;
    contentItm.textContent = '';
    var intId = window.setInterval(showTextGradually, speed);

    function showTextGradually () {
        if (pos < length) {
            var oldtext = contentItm.textContent;
            contentItm.textContent = oldtext + text[pos++];
        }
        else {
            window.clearInterval(intId);
            window.setInterval(function () {
                var oldtext = contentItm.textContent;
                var length = oldtext.length;
                if (oldtext[length-1] == '_') {
                    contentItm.textContent = oldtext.substr(0,length-1);
                }
                else {
                    contentItm.textContent = oldtext + '_';
                }
            }, 1000);
        }
    }
}

window.onload = rollBlinker;

