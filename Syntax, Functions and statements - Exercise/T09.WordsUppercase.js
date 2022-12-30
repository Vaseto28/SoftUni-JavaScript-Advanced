function uppercase(text){
    console.log(text.match(/\w+/g).join(", ").toUpperCase());
}