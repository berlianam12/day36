const dc = require('./dc');
(async () => {
    await dc.initialize();
    await dc.login();
    await dc.moveTo('1298873767438585887','1298873767438585890');
    await dc.text('/fish');
})();
