/**
 * @function shortCodeParse
 *
 * @param { string } text
 * @param { object } shortcode
 * @return { string }
 * @public
 *
*/

const shortCodeParser = (text, shortcode) => {
  return text ? text.replace(/\{\{(.[^}]+)\}\}/g, (_, match) => shortcode[match]) : '';
}

export default shortCodeParser;