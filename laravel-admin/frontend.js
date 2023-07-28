/*
    Fix select box can't search in Modal
 */
$.fn.modal.Constructor.prototype.enforceFocus = function () {};
$("div[id^='grid-modal-']").removeAttribute('tabindex');
$("div[id='modal']").removeAttribute('tabindex');