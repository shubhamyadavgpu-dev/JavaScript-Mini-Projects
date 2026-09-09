let plus_btn = document.querySelector("#main .plus button");

let h1 = document.querySelector(".number h1");

plus_btn.addEventListener("click" , function(){
    let n = Number(h1.innerText);
    n = n + 1;
   h1.innerText = n;
});

let minus_btn = document.querySelector("#main .minus button");

minus_btn.addEventListener("click" , function(){
    console.log("Minus button was clicked");
    let m = Number(h1.innerText);
    if (m > 0){
       m = m-1;
    h1.innerText = m ;
    }
})

let reset_btn = document.querySelector("#main .reset button");

reset_btn.addEventListener("click" , function(){
    console.log("Reset button was clicked");
    let r = Number(h1.innerText);
    h1.innerText = 0;
})