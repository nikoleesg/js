/*
    Fix select box can't search in Modal
 */
$.fn.modal.Constructor.prototype.enforceFocus = function () {};

$("div[id^='grid-modal-']").removeAttribute('tabindex');
$("div[id='modal']").removeAttribute('tabindex');


/*
    Fix class 'modal-title' HTML Escape
 */
var collection = document.getElementsByClassName('modal-title');

for (var i = 0; i < collection.length; i++)
{
    collection[i].innerHTML = collection[i].innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}