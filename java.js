window.addEventListener("DOMContentLoaded",function (e){

    let mosca=document.querySelector(".mosca");
    let tx=document.getElementById("x");
    let ty=document.getElementById("y");
    let trotar=document.getElementById("rotar");
    let fondo= document.querySelector("main");
    let rojo=document.getElementById("rojo");
    let verde=document.getElementById("verde");
    let azul=document.getElementById("azul");
    let R=255;
    let V=255;
    let A=255;
    let btNuevo=document.getElementById("añadir");

    rojo.addEventListener("change",function (e){
        R=rojo.value;
        if (R<128){
            R=128
            rojo.value=128
        }
        fondo.style.backgroundColor=`rgb(${R},${V},${A})`;
    });
    azul.addEventListener("change",function (e){
        A=azul.value;
        if (A<128){
            A=128
            azul.value=128
        }
        fondo.style.backgroundColor=`rgb(${R},${V},${A})`;
    });
    verde.addEventListener("change",function (e){
        V=verde.value;
        if (V<128){
            V=128
            verde.value=128
        }
        fondo.style.backgroundColor=`rgb(${R},${V},${A})`;
    });

    tx.addEventListener("change",function (e){
        let x = tx.value;
        mosca.style.left=x+"px";
    });
    ty.addEventListener("change",function (e){
        let y = ty.value;
        mosca.style.top=y+"px";
    });
    trotar.addEventListener("change",function (e){
        let r = trotar.value;
        mosca.style.rotate=r+"deg";
    });

    btNuevo.addEventListener("click",function (e){
        let nuevaMosca=document.createElement("div");
        nuevaMosca.classList.add("mosca");
        nuevaMosca.classList.add("seleccionada");
        main.append(nuevaMosca);
        mosca.classList.remove("seleccionada");
        mosca=nuevaMosca;
        tx.value=0
        trotar.value=0
        ty.value=0
    })

});
