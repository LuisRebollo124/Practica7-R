window.addEventListener("DOMContentLoaded",(e)=>{

    let mosca=document.getElementById("mosca");
    let x=document.getElementById("x");
    let y=document.getElementById("y");
    let rotar=document.getElementById("rotar");
    let fondo= document.getElementById("fondoo")
    let rojo=document.getElementById("rojo");
    let verde=document.getElementById("verde");
    let azul=document.getElementById("azul");
    let Rojo=0;
    let Verde=0;
    let Azul=0;

    x.addEventListener("change",function (e){
        mosca.style.left=`(${mosca})`;
    });
    y.addEventListener("change",function (e){
        mosca.style.top=`(${mosca})`;
    });
    rotar.addEventListener("change",function (e){
        mosca.style.rotate=`(${mosca})`;
    });

    rojo.addEventListener("change",function (e){
        fondo.style.backgroundColor=`rgb(${Rojo},${Verde},${Azul})`;
    });
    azul.addEventListener("change",function (e){
        fondo.style.backgroundColor=`rgb(${Rojo},${Verde},${Azul})`;
    });
    verde.addEventListener("change",function (e){
        fondo.style.backgroundColor=`rgb(${Rojo},${Verde},${Azul})`;
    });

});
