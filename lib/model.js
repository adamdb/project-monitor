function model() {
  return {
      APP_DIR: '', //This is set at run-time
      LISTEN_PORT: '8001',
      PUBLIC_HTML_DIR: 'www/dist/',
      INDEX_HTML: 'index.html'
  }
}

module.exports = model;
