function make_sandwhich(...items){
    console.log("Sandwick Summary: ");
    console.log("Bread");
    for(let item of items){
        console.log(item);
    }

    console.log("Bread");
    console.log("Enjoy your sandwich! ")
}

make_sandwhich("Ham","cheese")
make_sandwhich("Turkey", "Lettuce", "Tomato")
make_sandwhich("Chicken", "Bacon", "Avocado", "Mayo")