function createStars() {
    let starContainer = document.getElementById('rating');
    for (let i = 0; i < 10; i++){
        starContainer.innerHTML+=`<img src="assets/img/star.svg" alt="stellina rating" class="opacityStar">`;
    }
}

function feedbackStars() {
    let stars = document.querySelectorAll("#rating img");
    let clicked = false;

    stars.forEach(function (star, index) {
        star.addEventListener("click", function () {
            if(clicked == false){clicked=true}
            else if (clicked == true){clicked=false}

            // Aggiungi la classe "opacityStar" da tutte le stelle
            stars.forEach(function (s) {
                s.classList.add("opacityStar");
            });

            // Rimuove la classe "opacityStar" solo alle stelle fino a quella cliccata
            for (let i = 0; i <= index; i++) {
                stars[i].classList.remove("opacityStar");
            }
        });

        star.addEventListener("mouseover", function () {
            if (!clicked) {
                // Se non è stato cliccato, colora la stella e le precedenti
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.remove("opacityStar");
                }
            }
        });

        star.addEventListener("mouseout", function () {
            if (!clicked) {
                // Se non è stato cliccato, reimposta tutte le stelle a trasparenti
                stars.forEach(function (s) {
                    s.classList.add("opacityStar");
                });
            }
        });
    });
}







window.onload = function () {
    createStars();
    feedbackStars();
}
