function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  function make_great(magicians) {
    let modifiedMagicians = [];
  
    for (let i = 0; i < magicians.length; i++) {
      modifiedMagicians.push("the Great " + magicians[i]);
    }
  
    return modifiedMagicians;
  }
  
  let magician_names = ["Alishba", "Abbas", "Hina", "Ayesha"];
  
  let great_magicians = make_great(magician_names);
  show_magicians(magician_names);
  show_magicians(great_magicians);
  