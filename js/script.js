// lista Coupons
var coupons = ["viva10","dieta200","economico30"];

// Salvo tutti gli elementi che mi servono
var ingredients = document.getElementsByClassName("ingredient");
var total = document.getElementById("total");
var burgerName = document.getElementById("burgerName");
var coupon = document.getElementById("coupon");

// Aggiungo l'evento click al button
var button = document.getElementById("calculate").addEventListener("click",function(){
    var sum = 50;

    if( !burgerName.value ){
        alert("Devi inserire un nome!");
    }
    else{
        for (var i = 0; i < ingredients.length; i++) {
        
            if(ingredients[i].checked) {
                sum += parseInt(ingredients[i].value);
            }
        }

        if( coupon.value ){
            if(coupons.includes(coupon.value)){
                coupons.splice(coupons.indexOf(coupon.value),1)
                sum -= sum *0.2;
                console.log("Coupons rimasti: " + coupons.length);
                console.log(coupons);
            }
            else{
                alert("Coupon non Valido");
            }
        }
        total.innerText = sum.toFixed(2) + "€";
    }
});

