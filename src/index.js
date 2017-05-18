export default class Swapper {

    constructor(config) {
        this._name = 'Swapper';

        this.config = config || {};

        this.isEnabled = config.isEnabled !== undefined ? config.isEnabled : true;
        this.dragSrcEl = null;
        this.boxes = document.querySelectorAll(this.config.container + ' ' + this.config.element);

        [].forEach.call(this.boxes, (box) => {
            if (this.isEnabled) {
                box.setAttribute('draggable', this.isEnabled);
            }
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
        e.target.classList.add('swapper-moving');
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
        // if (this.dragSrcEl && e.target) {
        //     let a = this.dragSrcEl.closest(this.config.container);

        //     let b = e.target.closest(this.config.container);

        //     console.log(a, b);
        //     console.log(a.innerHTML === b.innerHTML);
        //     if (a.innerHTML !== b.innerHTML) {
        //         e.target.classList.remove('swapper--over');
        //         return;
        //     }
        // }

        // current hover target
        e.target.classList.add('swapper--over');
    }

    handleDragLeave(e) {
        // previous target element
        e.target.classList.remove('swapper--over');
    }

    handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }

        // Don't do anything if dropping the same column we're dragging.
        if (this.dragSrcEl && e.target && this.dragSrcEl !== e.target) {
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
            col.classList.remove('swapper--moving');
        });
    }

    enable() {
        this.isEnabled = true;
        [].forEach.call(this.boxes, (box) => {
            box.setAttribute('draggable', true);
        });
    }

    disable() {
        this.isEnabled = false;
        [].forEach.call(this.boxes, (box) => {
            box.removeAttribute('draggable');
        });
    }

    _returnFalse() {
        return false;
    }
}
