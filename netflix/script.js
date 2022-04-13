const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  fullscreen: "true",
  primary: "html5",
  stretching: "uniform",
  aspectratio: "16:9",
  renderCaptionsNatively: false,
  autostart: false,
  abouttext: "Github",
  aboutlink: "https://github.com/Foilz",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Sprite Fright - Open Movie by Blender Studio",
      description: "You're Watching",
      image: "https://i.ytimg.com/vi/_cMxraX_5RE/maxresdefault.jpg",
      sources: [
        {
          file:
            "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.1080p.webm",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.720p.webm",
          label: "720p"
        },
        {
          file:
            "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.480p.webm",
          label: "480p"
        },
        {
          file:
            "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.360p.webm",
          label: "360p"
        },
        {
          file:
            "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.240p.webm",
          label: "240p"
        },
        {
          file:
            "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.160p.webm",
          label: "160p"
        }
      ],
      captions: [
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BBengali%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Bangla",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BEnglish%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "English",
          kind: "captions",
          default: true
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BGerman%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "German",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BHungarian%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Hungarian",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BItalian%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Italian",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BMalayalam%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Malayalam",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BPortugu%C3%AAs%20(Portugal)%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Portuguese",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BRussian%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Russian",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BSpanish%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Spanish",
          kind: "captions"
        }
      ],
      tracks: [
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/mosaic.vtt",
          kind: "thumbnails"
        }
      ]
    }
  ]
});

playerInstance.on("ready", function () {
  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);


  
const player = playerInstance;

// display icon
const rewindContainer = playerContainer.querySelector('.jw-display-icon-rewind');
const forwardContainer = rewindContainer.cloneNode(true);
const forwardDisplayButton = forwardContainer.querySelector('.jw-icon-rewind');
forwardDisplayButton.style.transform = "scaleX(-1)";
forwardDisplayButton.ariaLabel = "Forward 10 Seconds"
const nextContainer = playerContainer.querySelector('.jw-display-icon-next');
nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);


// control bar icon
playerContainer.querySelector('.jw-display-icon-next').style.display = 'none'; // hide next button
const rewindControlBarButton = buttonContainer.querySelector(".jw-icon-rewind");
const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
forwardControlBarButton.style.transform = "scaleX(-1)";
forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
rewindControlBarButton.parentNode.insertBefore(forwardControlBarButton, rewindControlBarButton.nextElementSibling);

// add onclick handlers
[forwardDisplayButton, forwardControlBarButton].forEach(button => {
  button.onclick = () => {
    player.seek((player.getPosition() + 10));
  }
})
});


