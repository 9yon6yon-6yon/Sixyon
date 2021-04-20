
var Height = document.documentElement.scrollHeight;
var currentHeight = 0;
var bool = true;
var step = 4;
var speed = 15;
var interval = setInterval(scrollpage, speed)

function scrollpage() {
    if (currentHeight < 0 || currentHeight > Height)
        bool = !bool;
    if (bool) {
        window.scrollTo(0, currentHeight += step);
    } else {
       
        window.scrollTo(0, currentHeight += step);//just change the + to make it onwords and backwords
    }

}
scrollpage();

var val = 1000000;
while (val--) {
    if (val % 2 == 1) {
        i = 0;
        j = 1;
       
        document.write(i + " " + j + " " );
    }
    else {
        i = 1;
        j = 0;
       
        document.write(i + " " + j + " ");
    }
  
}
