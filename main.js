
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

function addThis(item){
    const addMe = document.querySelector('#arguments');
    addMe.appendChild(item);
}

const test = document.createElement('li');
test.innerText= 'Hello World!';
addThis(test)

const newI =document.querySelector('img');
newI.src = "/pics/thinking.jpg";
addThis(newI);

// ====================

function imgHeight(img,imgId){
    const imgH = document.getElementById(imgId);
    imgH.style.height = img;
}
const altImg = "150px";
imgHeight(altImg , 'image-3');

// ===============

function invis(input){
    document.getElementById(input).className = "invisible";

}

invis('thing-2')

// ==============

function newLi(string){
    const newl = document.createElement("li");
    newl.innerText = `${string}`;
    addThis(newl)
}

newLi('UwU im getting better')

// =============================

function header(headerSize , str){
    const newHeader = document.createElement(`${headerSize}`);
    newHeader.innerText = `${str}`;
    addThis(newHeader);
}

header('h3', "This is my header, there are many, but this one is mine :D")
