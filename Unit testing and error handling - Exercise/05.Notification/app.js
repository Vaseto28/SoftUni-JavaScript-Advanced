function notify(message) {
    let notificationField = document.getElementById('notification');
    notificationField.innerText = message;
    notificationField.style.display = notificationField.style.display === 'none' || notificationField.style.display === '' ? 'block' : 'none';

    notificationField.addEventListener('click', hide);

    function hide(){
      notificationField.style.display = 'none';
    }
}