/*
    Fix select box can't search in Modal
 */
$.fn.modal.Constructor.prototype.enforceFocus = function () {};

$("div[id^='grid-modal-']").removeAttr('tabindex');
$("div[id='modal']").removeAttr('tabindex');


/*
    Unescape HTML
 */
function unescapeHTML(html) {
    // Regular expression pattern to match HTML entities
    const regex = /&(amp|lt|gt|quot|apos);/g;

    // Map of HTML entities to their respective characters
    const entityMap = {
        amp: '&',
        lt: '<',
        gt: '>',
        quot: '"',
        apos: "'"
    };

    // Replace HTML entities with their corresponding characters
    return html.replace(regex, (match, entity) => entityMap[entity]);
}

// Example usage:
// const escapedHTML = '&lt;p&gt;Hello, &quot;ChatGPT&quot;&lt;/p&gt;';
// const unescapedHTML = unescapeHTML(escapedHTML);
// console.log(unescapedHTML); // Output: '<p>Hello, "ChatGPT"</p>'
