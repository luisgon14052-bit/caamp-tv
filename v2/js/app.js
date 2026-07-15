const video = document.getElementById("welcome-video");

video.addEventListener("ended", async ()=>{

    Router.show("next-screen");

    setTimeout(()=>{

        Router.show("schedule-screen");

        setTimeout(()=>{

            Router.show("welcome-screen");

            video.currentTime=0;

            video.play();

        },8000);

    },12000);

});

const coachBackground = document.getElementById("coach-background");
const className = document.getElementById("class-name");
const coachName = document.getElementById("coach-name");
const countdown = document.getElementById("countdown");
