var swappers = [];

swappers.push(new Swapper({
    container: '#swappercontainer',
    element: '.swapperbox',
    isEnabled: true,
    onChange: function (boxes) {
        // console.log(boxes);
    }
}));

swappers.push(new Swapper({
    container: '#swappercontainer2',
    element: '.swapperbox',
    isEnabled: true,
    onChange: function (boxes) {
        // console.log(boxes);
    }
}));

document.getElementById('enable').onclick = () => {
    swappers.forEach((s) => {
        s.enable();
    });
};
document.getElementById('disable').onclick = () => {
    swappers.forEach((s) => {
        s.disable();
    });
};
