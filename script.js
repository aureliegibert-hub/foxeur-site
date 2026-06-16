const btn = document.getElementById("startBtn");
const money = document.getElementById("money");
const status = document.getElementById("status");

btn.addEventListener("click", () => {

  btn.disabled = true;

  let amount = 0;
  const target = 5000000000;

  const rain = setInterval(() => {
    const euro = document.createElement("div");

    euro.className = "euro";
    euro.textContent = "💶";
    euro.style.left =
      Math.random() * window.innerWidth + "px";

    euro.style.top = "-50px";

    document.body.appendChild(euro);

    let y = -50;

    const fall = setInterval(() => {
      y += 6;
      euro.style.top = y + "px";

      if (y > window.innerHeight) {
        clearInterval(fall);
        euro.remove();
      }
    }, 16);

  }, 120);

  const counter = setInterval(() => {

    amount += 25000000;

    if (amount > target) {
      amount = target;
    }

    money.textContent =
      amount.toLocaleString("fr-FR") + " €";

    if (amount === target) {

      clearInterval(counter);

      status.innerHTML =
        "<h2>🤯 Richesse maximale atteinte</h2>";

      setTimeout(() => {

        document.getElementById("container")
          .style.display = "none";

        document.getElementById("prank")
          .classList.remove("hidden");

      }, 1500);

      setTimeout(() => {

        clearInterval(rain);

        window.open(
          "https://youtu.be/oPLObjVAvIU?si=sapdUezlV8CTvnTx",
          "_blank"
        );

      }, 5000);
    }

  }, 20);
});
