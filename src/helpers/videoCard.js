import Handlebars from 'handlebars';

const html = `
<li>
  <a href="{{link}}" title="{{title}}">
    <img src="{{thumbnail}}" alt="{{title}}"/>
    <main>
      <h3>{{title}}</h3>
    </main>
    <footer>
      WATCH NOW
      <span class="svg-icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </span>
    </footer>
  </a>
</li>`;

export function videoCard(video) {
  const template = Handlebars.compile(html);

  const renderedContent = template(video);

  return new Handlebars.SafeString(renderedContent);
}
