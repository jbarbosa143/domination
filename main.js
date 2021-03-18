
function lineThrough(){
    const line = document.querySelector('ul li');
    
    line.style.textDecoration ='line-through';
}
lineThrough();

// ====================
function addImg (id , imag){
    const image = document.querySelector('#' + id);
    image.src = imag;
}

addImg('image-1', 'pics/troll.png');
addImg('image-2', 'pics/uwukey.jpg');
addImg('image-3', 'pics/clown.jpg');

// ====================
function destroy(){
    const remove = document.querySelector('#arguments');
    remove.removeChild(remove.lastElementChild);

}

destroy();
destroy();
// ====================
function changeSize(id, size){
    const word = document.querySelector('#' + id);
    word.style.fontSize = size;
}
changeSize('thing-c', '65px');

// ===============
function addThis(newImg){
    const addMe = document.querySelector('#arguments');
    addMe.appendChild(newImg);
}

addThis('pics/thinking.jpg');