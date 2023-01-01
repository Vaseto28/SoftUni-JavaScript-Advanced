function focused() {
    let fields = document.getElementsByTagName("input");

    for (let field of fields){
        field.addEventListener('focus', fieldFocused);
        field.addEventListener('blur', fieldUnfocused);
    }

    function fieldFocused(event){
        event.target.parentElement.classList.add('focused');
    }

    function fieldUnfocused(event){
        event.target.parentElement.classList.remove('focused');
    }
}