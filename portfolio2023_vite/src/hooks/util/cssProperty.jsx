export function getCSSProps(property) {
    if (property) {
        let cssVal = window.getComputedStyle(document.documentElement).getPropertyValue(property);
        if (typeof cssVal != 'undefined' && cssVal.includes('px') && !isNaN(cssVal.replace('px', ''))) {
            cssVal = cssVal.replace('px', '')*1;
        }
        return cssVal;
    }
    return undefined;
}
export function setCSSProps(property, value) {
    if (property && value) document.documentElement.style.setProperty(property, value);
}