const electron = require('electron');

//Electron no permite utilizar directamente el constructor BrowserWindow para crear múltiples ventanas
//Hay que hacerlo a través del módule remote
//Más info: https://stackoverflow.com/questions/45639628/how-to-fix-browserwindow-is-not-a-constructor-error-when-creating-child-window-i
const BrowserWindow = electron.remote.BrowserWindow;

var stickyNotes = (function(){

    var publicAPI = {
        createStickyNote: ()=> {
            var stickyWin = new BrowserWindow({ width: 300, height: 250, frame: false, resizable: false });
            stickyWin.loadFile('index.html')
        }
    }

    return publicAPI;
})();