var a = new Swapper({
    isEnabled: true,
    onChange: function (boxes) {
        console.log(boxes);
    }
});



document.getElementById('enable').onclick = () => {
    a.enable();
};
document.getElementById('disable').onclick = () => {
    a.disable();
};




