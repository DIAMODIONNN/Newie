var cities = document.querySelectorAll("div");

var buttons = document.querySelectorAll("button");

var rem = document.querySelector("#No_city");



buttons.forEach(btn => {
    btn.addEventListener("click", t => {
        
        cities.forEach(city => {
            city.style.display = "none";
        });
        
        document.querySelector("." + t.target.id).style.display = "flex";
    });
});


rem.addEventListener("click", () => {
    cities.forEach(city => {
            city.style.display = "none";
    });
});







// function showCity(x){
//     removeCity();
//     for (var i = 0; i < citites.length; i++) {
//         console.log(citites[i])
//         if(i == x){
//             citites[i].style.display = "flex";
//         }
//     }
// }






// function removeCity(){
//     for (var i = 0; i < citites.length; i++) {
//         citites[i].style.display = "none";
//     }
// }
