/*
    Fix select box can't search in Modal
 */
$.fn.modal.Constructor.prototype.enforceFocus = function () {};

$("div[id^='grid-modal-']").removeAttr('tabindex');
$("div[id='modal']").removeAttr('tabindex');