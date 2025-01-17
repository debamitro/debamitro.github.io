document.addEventListener('DOMContentLoaded', function() {
    // Select all links in the content area
    var links = document.querySelectorAll('.my-page-content a');
    
    links.forEach(function(link) {
        // Check if the link is external (doesn't point to the current domain)
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
