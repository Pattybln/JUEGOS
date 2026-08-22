/* =========================================
   AÑO AUTOMÁTICO
========================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================
   CURSOR GLOW
========================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");


document.addEventListener(
    "mousemove",
    (event) => {

        if (!cursorGlow) return;


        cursorGlow.style.left =
            event.clientX + "px";


        cursorGlow.style.top =
            event.clientY + "px";

    }
);



/* =========================================
   PARALLAX DEL HERO
========================================= */

const hero =
    document.querySelector(".hero");


const heroHeart =
    document.querySelector(".hero-heart");


const heroStar =
    document.querySelector(".hero-star");


const orbitOne =
    document.querySelector(".orbit-one");


const orbitTwo =
    document.querySelector(".orbit-two");


if (hero) {

    hero.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5) * 20;


            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5) * 20;


            if (heroHeart) {

                heroHeart.style.transform =
                    `translate(${x}px, ${y}px) rotate(10deg)`;

            }


            if (heroStar) {

                heroStar.style.transform =
                    `translate(${-x}px, ${-y}px) rotate(-10deg)`;

            }


            if (orbitOne) {

                orbitOne.style.transform =
                    `translate(${x * .3}px, ${y * .3}px)`;

            }


            if (orbitTwo) {

                orbitTwo.style.transform =
                    `translate(${-x * .2}px, ${-y * .2}px)`;

            }

        }
    );


    hero.addEventListener(
        "mouseleave",
        () => {

            if (heroHeart) {

                heroHeart.style.transform =
                    "translate(0,0) rotate(10deg)";

            }


            if (heroStar) {

                heroStar.style.transform =
                    "translate(0,0) rotate(-10deg)";

            }

        }
    );

}



/* =========================================
   HOVER DE LAS TARJETAS
========================================= */

const cards =
    document.querySelectorAll(".game-card");


cards.forEach((card) => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.setProperty(
                "--mouse-x",
                "50%"
            );

            card.style.setProperty(
                "--mouse-y",
                "50%"
            );

        }
    );


    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            card.style.setProperty(
                "--mouse-x",
                `${x}px`
            );


            card.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        }
    );

});



/* =========================================
   CLICK EFFECT
========================================= */

cards.forEach((card) => {

    card.addEventListener(
        "click",
        (event) => {

            const link =
                card.querySelector(
                    ".game-arrow[href]"
                );


            if (
                link &&
                event.target.closest(
                    ".game-arrow"
                ) === null
            ) {

                // Solo añade un pequeño efecto
                // sin interferir con los enlaces.

                card.classList.add(
                    "card-clicked"
                );


                setTimeout(() => {

                    card.classList.remove(
                        "card-clicked"
                    );

                }, 300);

            }

        }
    );

});



/* =========================================
   BOTONES CON RIPPLE
========================================= */

const buttons =
    document.querySelectorAll(
        ".main-button, .secondary-button, .banner-button, .nav-button"
    );


buttons.forEach((button) => {

    button.addEventListener(
        "click",
        function (event) {

            const ripple =
                document.createElement("span");


            ripple.classList.add(
                "ripple"
            );


            const rect =
                button.getBoundingClientRect();


            ripple.style.left =
                event.clientX -
                rect.left +
                "px";


            ripple.style.top =
                event.clientY -
                rect.top +
                "px";


            button.appendChild(ripple);


            setTimeout(() => {

                ripple.remove();

            }, 600);

        }
    );

});