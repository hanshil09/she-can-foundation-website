
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";
        }
    };

    updateCounter();
});


const form = document.querySelector(".form");

form.addEventListener("submit", function(e){

    const email = form.email.value;

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        e.preventDefault();

        alert("Please enter a valid email address.");

    }
});

