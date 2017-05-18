### Swapper

Vanilla JS library to swap two elements in a page by drag and drop


```javascript
var swapper = new Swapper({
    containers: ['#swappercontainer', '#swappercontainer2'],
    element: '.swapperbox',
    isEnabled: true,
    swapBetweenContainers: true,
    onChange: function (boxes) {
        console.log(boxes);
    }
});
```

```javascript
document.getElementById('enable').onclick = () => {
    swapper.enable();
};
document.getElementById('disable').onclick = () => {
    swapper.disable();
};
```