var swapper = new Swapper({
    elementClass: 'swapperbox',
    isEnabled: true,
    onChange: function (boxes) {
        console.log(boxes);
    }
});

document.getElementById('enable').onclick = () => {
    swapper.enable();
};
document.getElementById('disable').onclick = () => {
    swapper.disable();
};




