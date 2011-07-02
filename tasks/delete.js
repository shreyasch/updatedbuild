var util = require("util"),
    Promise = require("promise").Promise,
    fs = require("fs"),
    path = require("path");

module.exports.tasks = {
    deleteFile: function (options, config, logger) {
        var p = new Promise();
        Array.from(options).each(function(file){
            logger.info("Removing file: " + file);
            if (path.exists(file)) {
                fs.unlinkSync(file);
            }
        });
        p.resolve(true);
        return p;
    }
};