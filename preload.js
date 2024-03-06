const { remote, ipcRenderer } = require('electron');

let currWindow = remote.BrowserWindow.getFocusedWindow();

window.closeCurrentWindow = function(){
  currWindow.close();
}
window.ipcRenderer = .ipcRenderer;
