var swapper = new Swapper({
    containers: ['#swappercontainer', '#swappercontainer2'],
    element: '.swapperbox',
    isEnabled: true,
    swapBetweenContainers: true,
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
