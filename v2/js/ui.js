function renderNextClass() {

    if (!tvState.nextClass) return;

    document.getElementById("class-name").textContent =
        tvState.nextClass.class;

    document.getElementById("coach-name").textContent =
        tvState.nextClass.coach;

    document.getElementById("coach-background").style.backgroundImage =
        `url(${tvState.nextClass.photo})`;

}
