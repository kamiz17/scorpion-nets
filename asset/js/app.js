 //slider
 let i = 0;
 let images = [
    "asset/media/images/photo1.jpg",
    "asset/media/images/photo2.jpg",
    "asset/media/images/photo3.jpg",
    "asset/media/images/photo4.jpg",
    "asset/media/images/photo6.jpg"
 ];
 let time = 5000;  // changes every 5 seconds






 
//change image
 function changeImg(){
     document.Slide.src = images[i];

   if(i < images.length -1){
       i++;
   }else {
       i = 0;
   }
   
   setTimeout("changeImg()", time)
}

 window.onload = changeImg;
