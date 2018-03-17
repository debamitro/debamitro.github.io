function rollBlinker () {

    // constants begin
    var linesToShow = ["Howdy",
                       "I did not find a suitable domain name",
                       "Hence I created this static page hosted on Github...",
                       "I want to showcase some of my persistent thoughts here.",
                       "This page might change very suddenly, or might not change much at all.",
                       "Please press enter to know more",
                       "",
                       "",
                       "1. My technical blog is at http://yetanothertechnicalblog.blotspot.in",
                       "2. My general blog is at http://isometimesblogat.blogspot.in",
                       "3. My music blog is at http://mysearchformelody.blotspot.in"
                      ];
    var prompt             = "$ ";
    var speed              = 40;
    var blinkSpeed         = 800;
    var lineChangeSpeed    = 3 * blinkSpeed;
    var blinkChar          = String.fromCharCode(219);
    // constants end

    var linenum            = 0;
    var pos                = 0;
    var text               = prompt + linesToShow[0] + ' ';
    var contentDiv         = document.getElementsByClassName('content').item(0);
    var contentItm = contentDiv;
    contentItm.textContent = '';
    var intId              = window.setInterval(showTextGradually, speed);

    function addMoreText (blinkId) {
        if (linenum < linesToShow.length - 1) {
            window.clearInterval(blinkId);
            var newContentNode = document.createElement("p");
            var newContentItm = document.createTextNode("");
            newContentNode.appendChild(newContentItm);
            contentDiv.appendChild(newContentNode);
            contentItm = newContentItm;
            text = prompt + linesToShow[++linenum] + ' ';
            pos = 0;
            intId = window.setInterval(showTextGradually, speed);
        }
    }

    function showBlinker () {
        var oldtext = contentItm.textContent;
        if (oldtext[oldtext.length-1] == blinkChar) {
            contentItm.textContent = oldtext.substr(0,oldtext.length-1);
        }
        else {
            contentItm.textContent += blinkChar;
        }
    }

    function showTextGradually () {
        if (pos < text.length) {
            contentItm.textContent += text[pos++];
        }
        else {
            window.clearInterval(intId);
            var blinkId = window.setInterval(showBlinker, blinkSpeed);
            window.setTimeout(addMoreText, lineChangeSpeed, blinkId);
        }
    }
}

window.onload = rollBlinker;

