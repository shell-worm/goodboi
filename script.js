function showVideo() {
    var videoContainer = document.getElementById('videoContainer');

    // Set the file path to your local video
    var videoFilePath = 'C:\Users\felix\Desktop\lapu\videos\a.mp4'; // Adjust the video file name and path

    // Embedding a local video using the HTML5 video element
    videoContainer.innerHTML = '<video width="560" height="315" controls><source src="' + videoFilePath + '" type="video/mp4"></video>';
    videoContainer.style.display = 'block';

    // Create a heart emoji for the video surprise
    var heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️'; // Use a heart emoji
    document.body.appendChild(heart);

    // Remove the heart element after the animation
    heart.addEventListener('animationend', function() {
        this.remove();
    });
}

function playMusic() {
    var music = document.getElementById('music');

    // Check if the music is already playing
    if (music.paused) {
        music.play();
        document.getElementById('musicButton').innerHTML = 'Pause music';
    } else {
        music.pause();
        document.getElementById('musicButton').innerHTML = 'Resume music';
    }
}

function createMiniCats() {
    var container = document.getElementById('miniCatsContainer');

    for (var i = 0; i < 10; i++) {
        var cat = document.createElement('img');
        cat.src = 'cat.jpg'; // Replace with the path to your mini cat image
        cat.className = 'miniCat';
        cat.style.top = Math.random() * 80 + 'vh';
        cat.style.left = Math.random() * 80 + 'vw';

        cat.addEventListener('click', function() {
            this.classList.add('clicked');
            if (this.src.includes('cat.jpg')) {
                changeNameAndShowHeart();
            }
        });

        container.appendChild(cat);
    }
}

function changeNameAndShowHeart() {
    var nameContainer = document.getElementById('nameContainer');
    nameContainer.innerHTML = "I love you, [CHANMYAE]!"; // Replace [Her Name] with her actual name

    // Create a heart animation
    var heart = document.createElement('div');
    heart.className = 'heart';
    document.body.appendChild(heart);

    // Remove the heart element after the animation
    heart.addEventListener('animationend', function() {
        this.remove();
    });
}

createMiniCats();
