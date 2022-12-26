function dayOfWeekCorespondingNum(dayName){
    let num;

    switch (dayName){
        case 'Monday': num = 1; break;
        case 'Tuesday': num = 2; break;
        case 'Wednesday': num = 3; break;
        case 'Thursday': num = 4; break;
        case 'Friday': num = 5; break;
        case 'Saturday': num = 6; break;
        case 'Sunday': num = 7; break;
        default: num = 'error'; break;
    }

    console.log(num);
}