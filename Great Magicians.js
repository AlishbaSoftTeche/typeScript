function show_magician(magician){
    for (let i=0;i<magician.length;i++){
        console.log(magician[i])
    }

}

function great_magician(magician){
    for (let i=0;i<magician.length;i++){
        magician[i] = "The Great " +magician[i];
    }
        
}

let magician_names = ["Alishba","Abbas","Nabeelah","Maryam","Dia"]

great_magician(magician_names);
show_magician(magician_names);