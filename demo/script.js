var dragAndSwap = new DragAndSwap({
    containers: ['#swappercontainer', '#swappercontainer2'],
    element: '.swapperbox',
    isEnabled: true,
    swapBetweenContainers: true,
    onChange: function (boxes) {
        // console.log(boxes);
    }
});

document.getElementById('enable').onclick = () => {
    dragAndSwap.enable();
};
document.getElementById('disable').onclick = () => {
    dragAndSwap.disable();
};
