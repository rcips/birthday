document.getElementById('specialImage').addEventListener('click', function() {
    document.getElementById('message').style.display = 'block';
    var audio = document.getElementById('birthdayMusic');
    audio.play();
});

function closeMessage() {
    document.getElementById('message').style.display = 'none';
    var audio = document.getElementById('birthdayMusic');
    audio.pause();
}
