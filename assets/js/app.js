
function imt(){
    
    let mass = +massInput.value;

    let growth = +growthInput.value;
        if(growth > 3){
            growth = growth / 100;
        }
    let index = mass / (growth ** 2);

    index = Math.round(index * 100) / 100;

    resultPlace.innerHTML = index;

    

    if(index <= 16){
        
        decryptionPlace.innerHTML = 'Выраженный дефицит массы тела';

    }else if( (index >= 16) && (index <= 18.5) ){

        decryptionPlace.innerHTML = 'Недостаточная (дефицит) масса тела';

    }else if( (index >= 18.5) && (index <= 25) ){

        decryptionPlace.innerHTML = 'Норма';

    }else if( (index >= 25) && (index <= 30) ){

        decryptionPlace.innerHTML = 'Избыточная масса тела (предожирение)';

    }else if( (index >= 30) && (index <= 35) ){

        decryptionPlace.innerHTML = 'Ожирение 1 степени';

    }else if( (index >= 35) && (index <= 40) ){

        decryptionPlace.innerHTML = 'Ожирение 2 степени';

    }else if(index >= 40){

        decryptionPlace.innerHTML = 'Ожирение 3 степени';
    }
    
}