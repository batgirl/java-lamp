var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

document.addEventListener('DOMContentLoaded', function() {
  console.log('connected to file');
});