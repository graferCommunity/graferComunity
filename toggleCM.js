var fixer = document.querySelector('.fixer');
var collectionNone = document.querySelector('.content-collection-none');
var messageNone = document.querySelector('.content-message-none');
var contentCloser = document.querySelector('.content-closer');


function togleCollection() {
    fixer.classList.replace('fixer', 'fixer-block');
    fixer.style.justifyContent = "end";
    collectionNone.classList.replace('content-collection-none', 'content-collection');

}
function togleMessage() {
    fixer.classList.replace('fixer', 'fixer-block');
    fixer.style.justifyContent = "center";
    messageNone.classList.replace('content-message-none', 'content-message');
}

function togleCloser() {
    fixer.classList.replace('fixer-block', 'fixer');
    collectionNone.classList.replace('content-collection', 'content-collection-none');
    messageNone.classList.replace('content-message', 'content-message-none');
}
