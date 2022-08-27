//HELADERIA GRIDO
let pedir = prompt("Bienvenido a Hekaderia Grido. \nDesea realizar un pedido? Si-No")

while (pedir.toLowerCase() == "si") {
    let sabor1 = prompt("ingrese el primer sabor que desea:")
    let sabor2 = prompt("ingrese el segundo sabor que desea:")
    let sabor3 = prompt("ingrese el tercer sabor que desea:")
    
   let pedido = prompt(` Usted a eligido los siguientes sabores: \n ${sabor1} + ${sabor2} + ${sabor3} \n ¿Desea confirmar el pedido?  Si-No `)
   if (pedido.toLowerCase() == "si") {
    alert ("Gracias por Elegirnos !!!")


} else{
    alert ("Lo esperamos en otra oportunidad") 
}
   
}///fin while


if (pedir.toLowerCase() == "no") {
    alert ("Lo esperamos en otra oportunidad")
    

}


/// Andres te queria consultar como se hace para que mientras se ejecuta javascript se pueda ver el fondo de mi html, porque puse un fondo y solo se podia ver una ves que finalizaba el codigo de javascript.