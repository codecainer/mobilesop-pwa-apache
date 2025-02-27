// @link WebViewerInstance: https://www.pdftron.com/api/web/WebViewerInstance.html
// @link WebViewerInstance.loadDocument: https://www.pdftron.com/api/web/WebViewerInstance.html#loadDocument__anchor

WebViewer(
  {
    path: '../../../lib',
    initialDoc: '../acute-abdomen.pdf',
  },
  document.getElementById('viewer')
).then(instance => {
  samplesSetup(instance);
  document.getElementById('select').onchange = e => {
    instance.loadDocument(e.target.value);
  };

  document.getElementById('file-picker').onchange = e => {
    const file = e.target.files[0];
    if (file) {
      instance.loadDocument(file);
    }
  };

  document.getElementById('url-form').onsubmit = e => {
    e.preventDefault();
    instance.loadDocument(document.getElementById('url').value);
  };
});
