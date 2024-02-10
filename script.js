
// var imgSet = document.getElementById("choice1");

// imgSet.addEventListener("click", function () {
//     var imaging = document.querySelector(".imaging");
//     imaging.classList.toggle("displayImage");
//     console.log(imaging);
//     });

//     // function changeImage(){
//     //     var imaging = document.querySelector(".imaging");
//     //     imaging.classList.toggle("displayImage");
//     // }

// const imgShoes = document.getElementById("shoes_box"),
//       item1 = document.getElementById("item1"),
//       item2 = document.getElementById("item2"),
//       item3 = document.getElementById("item3"),
//       item4 = document.getElementById("item4");

// item1.addEventListener("click", () => {
//         imgShoes.src = 'assets/images/air-vapormax.png';
//     });
// item2.addEventListener("click", () => {
//         imgShoes.src = 'assets/images/air-vapormax2.png';
//     });
// item3.addEventListener("click", () => {
//         imgShoes.src ="assets/images/air-vapormax3.png";
//     });
// item4.addEventListener("click", function () {
//         imgShoes.src = "assets/images/air-vapormax4.png";
//     });

    // alert("im here hello...")

// Step 1

    // function changeImage(filename) {
    //     let img = document.querySelector(".diff");
    //     img.setAttribute("src", filename);
    // }
    

// Step 2 Changing image
// sometimes, the computer just malfuctions refusing to act it might just need rest.

    function changeImage(src,title,drsc,price){
        document.querySelector(".diff").src = src;
        document.querySelector(".shoesTitle").innerHTML = title;
        document.querySelector(".shoeDescription").innerHTML = drsc;
        document.querySelector(".price").innerHTML = price;
    };

    // Changing font

    function  newColor(title,price,use,bg_name,p_col) {
    document.querySelector(".shoesTitle").style.color = title;
    document.querySelector(".price").style.color = price;
    document.querySelector(".price").style.border = p_col;
    document.querySelector(".use").style.color = use;
    document.querySelector("bg_name").style.color = bg_name;
};
 
    // var btn_switch = document.querySelector("choice2");

    // btn_switch.addEventListener("click", function(){
    //     var swift = document.querySelector("btn_set");
    //     swift.classList.toggle("prix");
    //     alert(swift);
    // })

    // function changeImage() {
    //     let tip = document.getElementById("prix1");
    //     tip.style.display = "none";
    // }
    