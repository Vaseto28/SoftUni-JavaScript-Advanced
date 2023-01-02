function lockedProfile() {
    let showMoreBtns = Array.from(document.getElementsByTagName("button"));

    for (let btn of showMoreBtns){
        btn.addEventListener('click', showInformation);
    }

    function showInformation(event){
        let currProfile = event.target.parentElement;
        if (!currProfile.querySelectorAll("input[checked]")[0].checked){
            if (event.target.textContent === "Show more"){
                currProfile.getElementsByTagName("div")[0].style.display = 'block';
                event.target.textContent = "Hide it";
            }
            else{
                currProfile.getElementsByTagName("div")[0].style.display = 'none';
                event.target.textContent = "Show more";
            }
        }
        else{
            return;
        }
    }
}