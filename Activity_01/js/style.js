const mobileM = document.getElementById("mobile");
const div = document.getElementById("menuDiv")

mobileM.addEventListener("click", function(){
    div.classList.remove("hidden");
    div.classList.add(`hidden`);
});