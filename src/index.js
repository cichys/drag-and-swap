export default class Swapper {

    constructor(config) {
        this._name = 'Swapper';

        this.config = config || {};

        this.isEnabled = config.isEnabled !== undefined ? config.isEnabled : true;
        this.dragSrcEl = null;

        this.boxes = [];

        this._findElementsInThePage();

        if (this.isEnabled) {
            this.enable();
        }
        [].forEach.call(this.boxes, (box) => {
            box.addEventListener('dragstart', e => this.handleDragStart(e), false);
            box.addEventListener('dragenter', e => this.handleDragEnter(e), false);
            box.addEventListener('dragover', e => this.handleDragOver(e), false);
            box.addEventListener('dragleave', e => this.handleDragLeave(e), false);
            box.addEventListener('drop', e => this.handleDrop(e), false);
            box.addEventListener('dragend', e => this.handleDragEnd(e), false);
        });
    }


    get name() {
        return this._name;
    }


    handleDragStart(e) {
        e.target.style.opacity = '0.5';
        this.dragSrcEl = e.target;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);
    }


    handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    }


    handleDragEnter(e) {
        if (!this.dragSrcEl || !e.target || this.dragSrcEl === e.target) {
            return;
        }

        // current hover target
        if (this._canDrop(this.dragSrcEl, e.target)) {
            e.target.classList.add('swapper--over');
        }
    }


    handleDragLeave(e) {
        // previous target element
        e.target.classList.remove('swapper--over');
    }


    handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }

        // Don't do anything if dropping the same elements we're dragging.
        if (this._canDrop(this.dragSrcEl, e.target)) {
            // Set the source column's HTML to the HTML of the column we dropped on.
            this.dragSrcEl.innerHTML = e.target.innerHTML;
            e.target.innerHTML = e.dataTransfer.getData('text/html');

            // Swap classes
            let oldClasses = e.target.classList.toString().split(' ');

            e.target.classList = this.dragSrcEl.classList;

            this.dragSrcEl.classList = '';
            oldClasses.forEach((o) => {
                this.dragSrcEl.classList.add(o);
            });

            // Swap IDs
            let oldId = e.target.id;

            e.target.id = this.dragSrcEl.id;
            this.dragSrcEl.id = oldId;

            // Callback when it's done
            if (this.config.onChange) {
                this.config.onChange(this.boxes);
            }
        }

        return false;
    }


    handleDragEnd(e) {
        [].forEach.call(this.boxes, function (col) {
            col.classList.remove('swapper--over');
            e.target.style.opacity = '1.0';
        });
    }


    //
    // Find all the elements inside all containers
    //
    _findElementsInThePage() {
        let selector = '';

        this.config.containers.forEach((c) => {
            selector += c + ' ' + this.config.element + ',';
        });
        selector = selector.slice(0, -1);

        this.boxes = document.querySelectorAll(selector);
    }


    //
    // Enable drag
    //
    enable() {
        this.isEnabled = true;
        [].forEach.call(this.boxes, (box) => {
            box.setAttribute('draggable', true);
            box.style.cursor = 'move';
        });
    }


    //
    // Disable drag
    //
    disable() {
        this.isEnabled = false;
        [].forEach.call(this.boxes, (box) => {
            box.removeAttribute('draggable');
            box.style.cursor = 'default';
        });
    }


    //
    // Find the container of the element
    //
    _findContainer(element) {
        let container = null;

        this.config.containers.every((c) => {
            container = element.closest(c);
            return !container; // when false exit from loop
        });

        return container;
    }


    //
    // Check if the two elements are not the same
    //
    _areDifferentElements(el1, el2) {
        return el1 && el2 && el1 !== el2;
    }


    //
    // Check if the two elements are in the same container
    //
    _hasSameContainers(el1, el2) {
        let c1 = this._findContainer(el1);
        let c2 = this._findContainer(el2);

        return (c1 && c2 && c1.innerHTML === c2.innerHTML);
    }


    //
    // Check if can swap elements
    //
    _canDrop(el1, el2) {
        if (!el1 || !el2) {
            return false;
        }
        if (!this._areDifferentElements(el1, el2)) {
            return false;
        }
        if (!this.config.swapBetweenContainers && !this._hasSameContainers(el1, el2)) {
            return false;
        }
        return true;
    }
}
