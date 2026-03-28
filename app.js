const videos = document.querySelectorAll(".ytvideo");

videos.forEach(video => {

    video.addEventListener("mouseenter", () => {
        let src = video.src;
        video.src = src + "&autoplay=1&mute=1";
    });

    video.addEventListener("mouseleave", () => {
        video.src = video.src.replace("&autoplay=1&mute=1","");
    });

});