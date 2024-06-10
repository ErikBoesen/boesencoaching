var nav = document.getElementsByTagName('nav')[0],
    navButton = document.getElementById('nav-button');

function emailMe(address) {
    window.open('mailto:' + address + '@gmail.com');
}

document.getElementById('nav-button').onclick = function() {
    if (nav.className === 'open') {
        nav.className = '';
        navButton.className = '';
    } else {
        nav.className = 'open';
        navButton.className = 'open';
    }
};
document.getElementById('emailShareButton').onclick = function() {
    window.open('mailto:?subject=Check out this page!&body=' + window.location.href);
};
document.getElementById('facebookShareButton').onclick = function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href);
};
document.getElementById('twitterShareButton').onclick = function() {
    window.open('https://twitter.com/intent/tweet?text=English+Now!+http%3A%2F%2F' + window.location.href);
};
