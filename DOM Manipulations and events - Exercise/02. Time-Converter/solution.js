function attachEventsListeners() {
    let btns = Array.from(document.querySelectorAll("input[type=button]"));

    for (let btn of btns){
        btn.addEventListener('click', convert);
    }

    function convert(event){
        let label = event.target.parentElement.querySelector("label").textContent.trim();
        let num = Number(event.target.parentElement.querySelector("input[type=text]").value);
        
        if (label === "Days:"){
            document.getElementById("hours").value = num * 24;
            document.getElementById("minutes").value = num * 24 * 60;
            document.getElementById("seconds").value = num * 24 * 3600;
        }
        else if (label === "Hours:"){
            document.getElementById("days").value = num / 24;
            document.getElementById("minutes").value = num * 60;
            document.getElementById("seconds").value = num * 3600;
        }
        else if (label === "Minutes:"){
            document.getElementById("days").value = (num / 60) / 24;
            document.getElementById("hours").value = num / 60;
            document.getElementById("seconds").value = num * 60;
        }
        else if (label === "Seconds:"){
            document.getElementById("days").value = (num / 3600) / 24;
            document.getElementById("hours").value = num / 3600;
            document.getElementById("minutes").value = num / 60;
        }
    }
}