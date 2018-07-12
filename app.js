var pics =["images/img1.jpeg",
    "images/img2.jpeg",
    "images/img3.jpeg",
    "images/img4.jpeg",
    "images/img5.jpeg",
    "images/img6.jpeg",
    "images/img7.jpeg"
];
var btn = document.querySelector("button");
var img = document.querySelector("img");
var count=1;

btn.addEventListener("click",function () {
    if (count ===6){
        count=0;
    }
    img.src=pics[count];
    count= count + 1;
});