var a = new Swapper();



// var dragSrcEl = null;


// function handleDragStart(e) {
//     this.classList.add('moving');

//     dragSrcEl = this;

//     e.dataTransfer.effectAllowed = 'move';
//     e.dataTransfer.setData('text/html', this.innerHTML);
// }


// function handleDragOver(e) {
//     if (e.preventDefault) {
//         e.preventDefault();
//     }

//     e.dataTransfer.dropEffect = 'move';

//     return false;
// }


// function handleDragEnter(e) {
//     // current hover target
//     this.classList.add('over');
// }


// function handleDragLeave(e) {
//     // previous target element
//     this.classList.remove('over');
// }


// function handleDrop(e) {
//     if (e.stopPropagation) {
//         e.stopPropagation(); // stops the browser from redirecting.
//     }

//     // Don't do anything if dropping the same column we're dragging.
//     if (dragSrcEl != this) {
//         // Set the source column's HTML to the HTML of the column we dropped on.
//         dragSrcEl.innerHTML = this.innerHTML;
//         this.innerHTML = e.dataTransfer.getData('text/html');

//         // Swap classes
//         var oldClasses = this.classList.toString().split(' ');
//         this.classList = dragSrcEl.classList;

//         dragSrcEl.classList = '';
//         oldClasses.forEach(function(o){
//             dragSrcEl.classList.add(o);
//         });

//         // Swap IDs
//         var oldId = this.id;
//         this.id = dragSrcEl.id;
//         dragSrcEl.id = oldId;
//     }

//     return false;
// }


// function handleDragEnd(e) {
//     [].forEach.call(cols, function (col) {
//         col.classList.remove('over');
//         col.classList.remove('moving');
//     });
// }


// var cols = document.querySelectorAll('#container .box');
// [].forEach.call(cols, function(col) {
//     col.setAttribute('draggable', true);
//     col.addEventListener('dragstart', handleDragStart, false);
//     col.addEventListener('dragenter', handleDragEnter, false);
//     col.addEventListener('dragover', handleDragOver, false);
//     col.addEventListener('dragleave', handleDragLeave, false);
//     col.addEventListener('drop', handleDrop, false);
//     col.addEventListener('dragend', handleDragEnd, false);
// });