console.log("Welcome to musician");
//Initialize the variables
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressbar = document.getElementById('myProgressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Levitating",filePath:"songs/1.mp3",coverPath:"https://a10.gaanacdn.com/images/albums/30/3446430/crop_480x480_3446430.jpg"},
    {songName:"Dil diyaan Gallan",filePath:"songs/2.mp3",coverPath:"https://www.pagalworld.pw/GpE34Kg9Gq/12831/thumb-tiger-zinda-hai-2017-mp3-songs111-300.jpg"},
    {songName:"Pasoori",filePath:"songs/3.mp3",coverPath:"https://www.pagalworld.pw/GpE34Kg9Gq/113604/148772-pasoori-mp3-song-300.jpg"},
    {songName:"Barbaadiyan",filePath:"songs/4.mp3",coverPath:"https://www.pagalworld.pw/GpE34Kg9Gq/113573/146063-barbaadiyan-shiddat-mp3-song-300.jpg"},
    {songName:"Jug Jug Jeeve",filePath:"songs/5.mp3",coverPath:"https://www.pagalworld.pw/GpE34Kg9Gq/113573/146063-barbaadiyan-shiddat-mp3-song-300.jpg"},
    {songName:"Excuses",filePath:"songs/6.mp3",coverPath:"https://www.pagalworld.pw/GpE34Kg9Gq/113510/148549-excuses-ap-dhillon-mp3-song-300.jpg"}
]
songItems.forEach((element,i) => {
      // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("Songname")[0].innerText=songs[i].songName;
});
//handle play pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listen to events

audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');

    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
   // console.log(progress);
    myProgressbar.value=progress;
})
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressbar.value*audioElement.duration/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       // console.log(e.target);
        makeallplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        
    })
})

//nextbutton
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
     songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        
})
//previous
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
     songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        
})


