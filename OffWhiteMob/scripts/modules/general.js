export function returnScrollbarWidth(){return window.innerWidth-document.querySelector("html").clientWidth}export function isNullOrWhiteSpaces(...r){for(const t of r)if(!t||""===t.trim())return!0;return!1}