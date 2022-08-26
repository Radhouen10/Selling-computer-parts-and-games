function sendnewstoemail(){
    var email=document.getElementById('email').value 
    alert("you recive message to  "+  email)
}
var product=new Object()

function addtocart(){
    var mark=document.getElementById('mark').innerHTML
    var model=document.getElementById('model').innerText
    var price=document.getElementById('price').innerHTML
    var image=document.getElementById('img').src
   product.fabricant=mark
   product.modele=model
   product.price=price
   product.image=image

   localStorage.setItem("product",JSON.stringify(product))
}
   var product2=new Object()

function addtocart1(){
    var mark2=document.getElementById('mark2').innerHTML
    var model2=document.getElementById('model2').innerText
    var price2=document.getElementById('price2').innerHTML
    var image2=document.getElementById('img2').src
   product2.fabricant=mark2
   product2.modele=model2
   product2.price=price2
   product2.image=image2

   localStorage.setItem("product2",JSON.stringify(product2))
   var product3=new Object()
}
function addtocart2(){
    var mark3=document.getElementById('mark3').innerHTML
    var model3=document.getElementById('model3').innerText
    var price3=document.getElementById('price3').innerHTML
    var image3=document.getElementById('img3').src
   product3.fabricant=mark3
   product3.modele=model3
   product3.price=price3
   product3.image=image3

   localStorage.setItem("product3",JSON.stringify(product3))


}
function checkout(){
    var produit=JSON.parse (localStorage.getItem("product" ))
    var produit1=JSON.parse (localStorage.getItem("product1" ))
    var produit2=JSON.parse (localStorage.getItem("product3" ))
document.getElementById('imge').innerHTML=`<img src="${produit.image}"/>`
document.getElementById('mdl').innerHTML=produit.modele
document.getElementById('price').innerHTML=produit.price

}