const Nightmare = require('nightmare');
const electronPath = require('../node_modules/nightmare/node_modules/electron');


const defaultOptions = {
  electronPath,
  show: true,
  typeInterval: 5,
};

// get nightmare link from duckduckgo
export const getLinkFromDuckDuckGo = async (keyword) => {
  const nightmare = new Nightmare(defaultOptions);
  return nightmare
    .goto('https://duckduckgo.com')
    .type('#search_form_input_homepage', keyword)
    .click('#search_button_homepage')
    .wait('#r1-0 a.result__a')
    .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
    .end();
};