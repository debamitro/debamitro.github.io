function replaceTextInNode (node, transformer) {
    if (node.nodeType == 3) {
        newText = transformer(node.nodeValue);
        node.nodeValue = newText;
    }
    if (node.hasChildNodes()) {
        node.childNodes.forEach(function (elem) {
            replaceTextInNode(elem, transformer);
        });
    }
}
function transformtextnodes (transformer) {
    return function () {
        document.querySelectorAll("transliterate").forEach(function (elem) {
            if (elem.hasAttribute("language") &&
                elem.getAttribute("language") == "bangla") {
                replaceTextInNode(elem, transformer);
            }
        });
    }
}
