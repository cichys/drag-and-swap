# drag-and-swap

Vanilla JS library that allows to swap 2 elements in a page by drag and drop

[Demo on Plunker](https://plnkr.co/edit/unb0mgY99oG4ofj1vVgU?p=preview)


## Usage

Initialize library

```javascript
var dragAndSwap = new DragAndSwap({
    containers: ['#swappercontainer', '#swappercontainer2'], // Array of containers
    element: '.swapperbox',                                  // The draggable elements
    isEnabled: false,                                        // Enabled on start - default: true
    swapBetweenContainers: true,                             // Swap between different controllers - default: false
    onChange: function (boxes) {                             // Callback when swap is done
        console.log(boxes);
    }
});
```

Enable or disable manually

```javascript
document.getElementById('enable').onclick = () => {
    dragAndSwap.enable();
};
document.getElementById('disable').onclick = () => {
    dragAndSwap.disable();
};
```


## Build

```
npm run build
npm run dev
```


## License

Released under the terms of MIT License.
