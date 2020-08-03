var argscheck = require('cordova/argscheck');
var exec = require('cordova/exec');
var HelloCamera = require('./HelloCamera');

var helloCameraExport = {};

for (var key in HelloCamera) {
    helloCameraExport[key] = HelloCamera[key];
}

helloCameraExport.getPicture = function (successCallback, errorCallback, options) {
    argscheck.checkArgs('fFO', 'Camera.getPicture', arguments);
    options = options || {};
    var getValue = argscheck.getValue;

    var quality = getValue(options.quality, 50);
    var destinationType = getValue(options.destinationType, HelloCamera.DestinationType.FILE_URI);
    var sourceType = getValue(options.sourceType, HelloCamera.PictureSourceType.CAMERA);
    var targetWidth = getValue(options.targetWidth, -1);
    var targetHeight = getValue(options.targetHeight, -1);
    var encodingType = getValue(options.encodingType, HelloCamera.EncodingType.JPEG);
    var mediaType = getValue(options.mediaType, HelloCamera.MediaType.PICTURE);
    var allowEdit = !!options.allowEdit;
    var correctOrientation = !!options.correctOrientation;
    var saveToPhotoAlbum = !!options.saveToPhotoAlbum;
    var popoverOptions = getValue(options.popoverOptions, null);
    var cameraDirection = getValue(options.cameraDirection, HelloCamera.Direction.BACK);

    var args = [quality, destinationType, sourceType, targetWidth, targetHeight, encodingType,
        mediaType, allowEdit, correctOrientation, saveToPhotoAlbum, popoverOptions, cameraDirection];

    exec(successCallback, errorCallback, 'HelloCamera', 'takePicture', args);
};

helloCameraExport.cleanup = function (successCallback, errorCallback) {
    //
    // Androidでは何もしない (iOSにのみ必要)
    //
    //exec(successCallback, errorCallback, 'HelloCamera', 'cleanup', []);
};

module.exports = helloCameraExport;
