const video = document.getElementById("welcome-video");

const welcome = document.getElementById("welcome-screen");
const next = document.getElementById("next-screen");
const schedule = document.getElementById("schedule-screen");

function show(id){

    document
        .querySelectorAll(".screen")
        .forEach(screen=>screen.classList.remove("active"));

    document
        .getElementById(id)
        .classList.add("active");

}

show("welcome-screen");

video.addEventListener("ended",()=>{

    show("next-screen");

    setTimeout(()=>{

        show("schedule-screen");

        setTimeout(()=>{

            show("welcome-screen");

            video.currentTime=0;

            video.play();

        },8000);

    },12000);

});
