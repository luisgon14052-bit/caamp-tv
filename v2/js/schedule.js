const next = await getNextClass();

tvState.nextClass = {

    class: next.classes.name,

    coach: next.coaches.name,

    photo: next.coaches.photo_url,

    time: next.start_time

};

renderNextClass();
