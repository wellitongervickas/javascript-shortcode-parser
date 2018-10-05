/**
 * @function shortCodeParse
 *
 * @param { string } text
 * @param { object } shortcode
 * @return { string }
 * @public
 *
*/

const shortCodeParse = (text, shortcode) => {
  return text ? text.replace(/\{\{(.[^}]+)\}\}/g, (_, match) => shortcode[match]) : '';
}

export default shortCodeParse;