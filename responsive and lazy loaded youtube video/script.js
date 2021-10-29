function youtubelazy(){

    var youtube = document.getElementsByClassName("youtube")[0];
    var youtubeImage = document.getElementsByClassName("youtube__image")[0];
    var youtubePlay = document.getElementsByClassName("youtube__play")[0];
    var youtubeIframe = document.createElement("iframe");
    
    youtubeIframe.setAttribute("title", "The Matrix Resurrections – Official Trailer");
    youtubeIframe.setAttribute("src", "https://www.youtube.com/embed/9ix7TUGVYIo?rel=0");
    youtubeIframe.setAttribute("frameborder", "0");
    youtubeIframe.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    
    youtube.removeChild(youtubeImage);
    youtube.removeChild(youtubePlay);
    youtube.appendChild(youtubeIframe);
    
}