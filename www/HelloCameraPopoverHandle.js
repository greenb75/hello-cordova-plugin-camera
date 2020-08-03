/**
 * @ignore in favour of iOS' one
 * A handle to an image picker popover.
 */
var HelloCameraPopoverHandle = function () {
    this.setPosition = function (popoverOptions) {
        console.log('HelloCameraPopoverHandle.setPosition is only supported on iOS.');
    };
};

module.exports = HelloCameraPopoverHandle;
