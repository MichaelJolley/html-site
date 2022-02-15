import Handlebars from 'handlebars';

import moveStaticFiles from './src/moveStaticFiles.js';
import generateHome from './src/generateHome.js';
import {
  blogCard,
  latestPosts,
  latestVideos,
  videoCard
} from './src/helpers/index.js';

function registerHelpers() {

  Handlebars.registerHelper('blogCard', blogCard);
  Handlebars.registerHelper('videoCard', videoCard);
  Handlebars.registerHelper('latestPosts', latestPosts);
  Handlebars.registerHelper('latestVideos', latestVideos);

}

async function main() {

  registerHelpers();

  await moveStaticFiles();


  // build root page
  await generateHome();

  // build blog pages

}

main();
