const React = require('react');

function PageWrapper (html) {
  return (
    <html>
      <head>
        <title>{html.title}</title>
      </head>
      <body>
        {html.children}
      </body>
    </html>
  );
}

module.exports = PageWrapper;