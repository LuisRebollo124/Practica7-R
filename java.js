window.addEventListener("DOMContentLoaded",function (e){

    let mosca=document.getElementById("mosca");
    let x=document.getElementById("x");
    let y=document.getElementById("y");
    let rotar=document.getElementById("rotar");
    let fondo= document.getElementById("fondoo")
    let rojo=document.getElementById("rojo");
    let verde=document.getElementById("verde");
    let azul=document.getElementById("azul");
    let R=255;
    let V=255;
    let A=255;

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

    x.addEventListener("change",function (e){
        mosca.style.left=`(${mosca})`;
    });
    y.addEventListener("change",function (e){
        mosca.style.top=`(${mosca})`;
    });
    rotar.addEventListener("change",function (e){
        mosca.style.rotate=`(${mosca})`;
    });

});
