let imgWrapper = document.querySelector(".imageWrapper");
let navWrapper = document.querySelector(".navigationWrapper");
let img;
let imgName = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.webp",
];

addDots(imgName.length);
addImages(imgName);

img = document.querySelectorAll(".displayImage");
let dots = document.querySelectorAll(".navigationDot");

//adding the img tags html
function addImages(imgName) {
    for (var i = 0; i < imgName.length; i++) {
        let isHiddenClass = i === 0 ? '' : 'isHidden';
        imgWrapper.innerHTML = imgWrapper.innerHTML + "<img class='displayImage " + isHiddenClass + "' src='images/" + imgName[i] + "'>";
    }
}

//adding the dots in the carousel
function addDots(numberOfImages) {
    for (var i = 0; i < numberOfImages; i++) {
        navWrapper.innerHTML = navWrapper.innerHTML + "<div class='navigationDot'></div>";
    }

    // for (var i = 0; i < numberOfImages; i++) {
    //     navWrapper.innerHTML = `${navWrapper.innerHTML} <div class=\"navigationDot\>`;
    // }

    // array.map / reduce / forEach
}

function state(index){
     dots[index].addEventListener("click", function(){
        for (var i = 0; i < imgName.length; i++) {
            img[i].classList.add('isHidden');
        }
         img[index].classList.remove("isHidden");
     });
 }

for (i = 0; i < imgName.length; i++) {
    state(i);
}

function showSlide(index){
       for (var i = 0; i < numberOfImages; i++) {
           img[i].classList.add('isHidden');
       }
        img[index].classList.remove("isHidden");
}

//var timer = setInterval(showSlide(i), 5000);

//for (i = 0; i < numberOfImages; i++) {
//    setInterval(showSlide(i), 5000);
//}




















