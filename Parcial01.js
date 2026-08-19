const empleados=[]

function agregar(){
    let esValido=true;

    document.getElementById('nitError').textContent = '';
    document.getElementById('nombreError').textContent = '';
    document.getElementById('fechaError').textContent = '';
    document.getElementById('agregarExito').textContent = '';

    const nit=document.getElementById('nit').value.trim()
    if(nit===''){
        document.getElementById('nitError').textContent='Debe colocar el nit';
        esValido=false;
    }

    const nombre=document.getElementById('nombre').value.trim()
    if(nombre===''){
        document.getElementById('nombreError').textContent='Debe colocar el nombre';
        esValido=false;
    }
    else if(nombre.length<6){
        document.getElementById('nombreError').textContent='El nombre y apellido debe ser mayor a 6 letras';
        esValido=false;
    }

    const fecha=document.getElementById('fecha').value
    if(fecha===''){
        document.getElementById('fechaError').textContent='debe colocar la fecha';
        esValido=false;
    }

    const ocupacion=document.getElementById('ocupacion').value.trim()
    if(ocupacion===''){
        document.getElementById('ocupacionError').textContent='Debe colocar la ocupacion';
        esValido=false;
    }

    if (esValido) {
        empleados.push({nit: nit, nombre: nombre, fecha: fecha, ocupacion: ocupacion });
        document.getElementById('agregarExito').textContent = 'Se ha agregado exitosamente';
        listaE();
    }
}

function listaE(){
    const lista = document.getElementById('empleadosLista');
    
    for(let i=0;i<empleados.length;i++){
        const empleado=empleados[i];
        const item=document.createElement('li');
        item.textContent = `NIT:${empleado.nit}|Nombre:${empleado.nombre}|Fecha:${empleado.fecha}`;
        lista.appendChild(item);
    }

    }