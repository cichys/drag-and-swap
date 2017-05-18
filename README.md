# Swapper

Vanilla JS library to swap two elements in a page by drag and drop

[Demo on Plunker](https://plnkr.co/edit/unb0mgY99oG4ofj1vVgU?p=preview)


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

```
npm run build
npm run dev
```
