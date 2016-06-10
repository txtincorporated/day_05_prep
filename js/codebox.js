$(function() {
  var tBody    = $('#tBody'); // Input area
  var pMarkOut = $('#pMarkOut'); // Shows rendered HTML
  var mObj = {}; // Empty object, filled in during JSON string update

  function render() {
    var bodVal = tBody.val(); // Raw article markup
    var m = marked(bodVal); // Convert markup to html

    // Render article preview (rendered HTML)
    pMarkOut.html(m);
    pMarkOut.find('pre code').each(function(i, block) {
      hljs.highlightBlock(block); // Syntax-highlight each code block "in place"
    });

    // Update JSON article
    mObj.articleBody = m;
    var jsonStr = pJson.text(JSON.stringify(mObj));
  }

  // Any character change (article editing) updates the live output paragraphs
  tBody.on('input', render);

  render(); // Render once on doc load
});
