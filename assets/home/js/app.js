var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

if ("IntersectionObserver" in window) {
  var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(video) {
      if (video.isIntersecting) {
        for (var source in video.target.children) {
          var videoSource = video.target.children[source];
          if (
            typeof videoSource.tagName === "string" &&
            videoSource.tagName === "SOURCE"
          ) {
            videoSource.src = videoSource.dataset.src;
          }
        }

        video.target.load();
        video.target.classList.remove("lazy");
        lazyVideoObserver.unobserve(video.target);
      }
    });
  });

  lazyVideos.forEach(function(lazyVideo) {
    lazyVideoObserver.observe(lazyVideo);
  });
}

document.getElementById("landing-vid").addEventListener(
  "loadedmetadata",
  function() {
    this.currentTime = 2;
    this.style.filter = "brightness(50%) blur(5px)";
    console.log("Done")
  },
  false
);
