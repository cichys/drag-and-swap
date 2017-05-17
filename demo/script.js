var swapper = new Swapper({
    container: '#swappercontainer',
    element: '.swapperbox',
    isEnabled: true,
    onChange: function (boxes) {
        // console.log(boxes);
    }
});

var swapper2 = new Swapper({
    container: '#swappercontainer2',
    element: '.swapperbox',
    isEnabled: true,
    onChange: function (boxes) {
        // console.log(boxes);
    }
});

document.getElementById('enable').onclick = () => {
    swapper.enable();
};
document.getElementById('disable').onclick = () => {
    swapper.disable();
};




