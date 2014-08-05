function model() {
  return {
      APP_DIR: '', //This is set at run-time
      LISTEN_PORT: '3000',
      PUBLIC_HTML_DIR: 'client/dist/',
      INDEX_HTML: 'index.html'
  }
}

module.exports = model;
