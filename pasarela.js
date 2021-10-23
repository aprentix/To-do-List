API_NAME = "https://jsonplaceholder.typicode.com/users"

var uno = document.getElementById('salida');
var intro = document.getElementById('btn');
var map=new Map();
var nombre = document.getElementById('iden');
var contraseña = document.getElementById('pass');
fetch(`${API_NAME}`)
    .then((response) => response.json())
    .then((users)=>{
        users.forEach((user) => {
            map.set(`${user.username}`, `${user.name}`);
        });
    });


comprobar = function(){
    var usuario_name = nombre.value;
    var usuario_contraseña = contraseña.value;
    if(usuario_name!=""&&usuario_contraseña!=""){
        if(map.has(usuario_name)&&map.get(usuario_name)==usuario_contraseña){
            //alert('Se acaba de logear correctamente');
            uno.innerHTML=`Bienvenido ${usuario_name} !!! :)`;
        } 
        else{
            //alert('No se ha logeado correctamente');
            uno.innerHTML=`Intentalo de nuevo ${usuario_name}!! :(`;
            alert('Prueba por ejemplo con -> Usuario: Bret **** Contraseña: Leanne Graham');
        }
    }
    nombre.value ="";
    contraseña.value = "";
}

intro.addEventListener('click', comprobar);




