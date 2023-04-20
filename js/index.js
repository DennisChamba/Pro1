function validarFecha(){
    let fecha = document.getElementById('fecha').value;
    let emergente = document.getElementById('container-modal')
    if(fecha != "2023-01-05"){
        emergente.style.display = 'flex';
        document.getElementById('corazon').src = 'https://i.pinimg.com/originals/93/80/dd/9380ddd5af0ed336e5f9394672d08ce2.gif';
    }else{
        location.href = 'Pro1/principal.html'
    }
}

function cerrarEmergente(){
    document.getElementById('container-modal').style.display = 'none'
    document.getElementById('corazon').src = '';
}