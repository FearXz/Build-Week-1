function createStars() {
    let starContainer = document.getElementById('rating');
    for (let i = 0; i < 10; i++) {
        starContainer.innerHTML += `<img src="assets/img/star.svg" alt="stellina rating" class="opacityStar">`;
    }
}

function feedbackStars() {
    let stars = document.querySelectorAll("#rating img");
    let lastclicked;
    let clicked = false;

    stars.forEach(function (star, index) {
        star.addEventListener("click", function () {

            if (clicked == false && lastclicked != index) {
                lastclicked = index;
                clicked = true;


                // Aggiungi la classe "opacityStar" da tutte le stelle
                stars.forEach(function (s) {
                    s.classList.add("opacityStar");
                });

                // Rimuove la classe "opacityStar" solo alle stelle fino a quella cliccata
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.remove("opacityStar");
                }
            }
            // else if funziona dal secondo click in poi
            else if (clicked == true && lastclicked != index) {
                lastclicked = index;

                stars.forEach(function (s) {
                    s.classList.add("opacityStar");
                });

                for (let i = 0; i <= index; i++) {
                    stars[i].classList.remove("opacityStar");
                }
            }
            else if (lastclicked == index) {
                clicked = false

            }


        });

        star.addEventListener("mouseover", function () {
            if (clicked==false) {
                // Se non è stato cliccato, colora la stella e le precedenti
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.remove("opacityStar");
                }
            }
        });

        star.addEventListener("mouseout", function () {
            if (clicked==false) {
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
