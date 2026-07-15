const Router = {

    current: "welcome",

    show(screen){

        document
            .querySelectorAll(".screen")
            .forEach(s=>s.classList.remove("active"));

        document
            .getElementById(screen)
            .classList.add("active");

        this.current = screen;

    }

};
