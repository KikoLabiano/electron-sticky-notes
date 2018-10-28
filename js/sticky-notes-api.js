const electron = require('electron');
const fs = require('fs-jetpack');

//Electron no permite utilizar directamente el constructor BrowserWindow para crear múltiples ventanas
//Hay que hacerlo a través del módule remote
//Más info: https://stackoverflow.com/questions/45639628/how-to-fix-browserwindow-is-not-a-constructor-error-when-creating-child-window-i
const BrowserWindow = electron.remote.BrowserWindow;

var stickyNotes = (function() {

  var publicAPI = {
    createStickyNote: () => {
      let stickyWin = new BrowserWindow({
        width: 400,
        height: 400,
        frame: false
      });
      stickyWin.loadFile('index.html');
      stickyWin.once('ready-to-show', () => {
        win.show()
      });
    },
    deleteStickyNote: () => {
      let w = electron.remote.getCurrentWindow();
      w.close();
    },
    minimizeStickyNote: () => {
      let w = electron.remote.getCurrentWindow();
      w.minimize();
    },
    saveStickyNote: (text)=>{
      //Create dir
      fs.dir(electron.remote.app.getPath("appData") + "\\sticky-notes\\");
      //Write in file
      fs.write(electron.remote.app.getPath("appData") + "\\sticky-notes\\sticky" + electron.remote.getCurrentWindow().id + ".txt",text);
    }
  }

  return publicAPI;
})();
