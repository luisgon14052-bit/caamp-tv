const video=document.getElementById("welcomeVideo");

const intro=document.getElementById("intro");

const app=document.getElementById("app");

video.addEventListener("ended",()=>{

intro.style.display="none";

app.classList.remove("hidden");

});
