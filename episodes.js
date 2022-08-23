console.log("test");

let episodes = [
  {
    title: "Eposide 5",
    description: "info for episode 5",
    date: "8/4/22",
    uri: "4zT3s8ThNV76CdqJmGapfv?si=83aaeb329fea40a4",
  },
  {
    title: "Eposide 4",
    description: "info for episode 4",
    date: "8/4/22",
    uri: "41NmR6Vs2zZRF458KdrWo3?si=b56106b1254e4dd9",
  },
  {
    title: "Eposide 3",
    description: "info for episode 3",
    date: "8/4/22",
    uri: "5Bt9bMwiHwvy0Twdgb6IGV?si=185fe88a30104314",
  },
  {
    title: "Eposide 2",
    description: "info for episode 1",
    date: "8/4/22",
    uri: "7KoaU3mBAQnnovNqYw5eoj?si=9f43a4b6e2e44e6c",
  },
  {
    title: "Eposide 1",
    description: "info for episode 1",
    date: "8/4/22",
    uri: "5k71heEzjRGWv7Qom4JxmQ?si=7ae5965823d1467a",
  },
];

var episodeElm = document.getElementById("episodes");
for (let item of episodes) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    `https://open.spotify.com/embed/playlist/${item.uri}?utm_source=generator&theme=0`
  );
  iframe.setAttribute("width", "500");
  iframe.setAttribute("height", "600");
  iframe.setAttribute(
    "allow",
    (allow =
      "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture")
  );

  var playlistContainer = document.createElement("div");
  playlistContainer.appendText;

  episodeElm.appendChild(iframe);

  console.log("test");
}
