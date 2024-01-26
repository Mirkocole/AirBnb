let houses = document.querySelectorAll(".houses");
for (let house of houses) {
    house.addEventListener("click", () => {
        window.location.href = "stanza.html"
    })
}