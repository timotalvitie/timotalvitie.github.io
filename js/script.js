
let currentSlideIndex;

const portfolio = [
  {
    "href": "portfolio/p_the_mandalorian.jpg",
    "title": `
      <b>The Mandalorian Poster Idea</b>.
      A mashup of movie posters, made in the style of <u>The American</u> but with Mandalorian characters. <a href="www.google.fi">link test</a> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum end.
      `
  },
  {
    "href": "portfolio/p_minion_peaks.jpg",
    "title": `
      <b>Twin Peaks / Minions Poster Mashup</b>.
      A mashup of movie posters, made in the style of <u>Twin Peaks</u> but with inions.
      `
  },
  {
    "href": "portfolio/p_max_beane.jpg",
    "title": `
      <b>Max Payne / Mr. Bean Mashup</b>.
      A mashup of video game art in the style of Max Payne, merged with Mr. Bean.
      `
  },
  {
    "href": "portfolio/p_lbr_all.jpg",
    "title": `
      <b>Lost Beyond Redemption promos 1/3</b>.
      Lorem ipsum.
      `
  },
  {
    "href": "portfolio/p_lbr_mh.jpg",
    "title": `
      <b>Lost Beyond Redemption promos 2/3</b>.
      Lorem ipsum.
      `
  },
  {
    "href": "portfolio/p_lbr_tu.jpg",
    "title": `
      <b>Lost Beyond Redemption promos 3/3</b>.
      Lorem ipsum.
      `
  },
  {
    "href": "portfolio/p_mammoth_sun_halo.jpg",
    "title": `
      <b>Mammoth Sun Cover Art set 1/4</b>.
      Lorem ipsum.
      `
  },
  {
    "href": "portfolio/p_mammoth_sun_ascent.jpg",
    "title": `
      <b>Mammoth Sun Cover Art set 2/4</b>.
      Lorem ipsum.
      `
  },  
  {
    "href": "portfolio/p_mammoth_sun_derelict.jpg",
    "title": `
      <b>Mammoth Sun Cover Art set 3/4</b>.
      Lorem ipsum.
      `
  },  
  {
    "href": "portfolio/p_mammoth_sun_landings.jpg",
    "title": `
      <b>Mammoth Sun Cover Art set 4/4</b>.
      Lorem ipsum.
      `
  },  
];

const pItemGradient = "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.20))";
// const pItemGradient = "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.20))";
// const pItemGradient = "linear-gradient(rgba(150, 150, 150, 0.65), rgba(150, 150, 150, 0.20))";

$(document).ready(() => {

    currentSlideIndex = 0;
    $("#menu-item-bio").on("click", scrollUp);
    $("#menu-item-portfolio, #text-link-portfolio").on("click", scrollDown);

    for(const p of portfolio) {

      // Assume all portfolio images have the _thumb suffix.
      const thumbnailPath = `${p.href.split(".")[0]}_thumb.jpg`;

      const $pItem = $("<a></a>", {
        "class": "portfolio-item m-1",
        "href": p.href,
        "sbl-title": p.title,
        "data-thumbnail-path": thumbnailPath
      })
      
      $pItem.css("background-image", `${pItemGradient}, url(${thumbnailPath})`);
      $pItem.appendTo("#portfolio-container");
        
      $pItem.hover(
        function() {
          const thumbPath = $(this).data("thumbnail-path");
          $(this).css("background-image", `url(${thumbPath})`);
        }, function() {
          const thumbPath = $(this).data("thumbnail-path");
          $(this).css("background-image", `${pItemGradient}, url(${thumbPath})`);
        }
      );
    }

    // Init the gallery
    new SimpleLightbox({
      elements: '#portfolio-container a',
      captionAttribute: "sbl-title"
    });
});


/* Scroll up to bio */
function scrollUp() {
  if($("body").hasClass("portfolio-active")) {
      $("body").removeClass("portfolio-active")
        .addClass("bio-active");
      currentSlideIndex--;
      
      const $currentSlide = $(".background").eq(currentSlideIndex);
      $currentSlide.removeClass("down-scroll").addClass("up-scroll");
  }
}

/* Scroll down to portfolio */
function scrollDown() {

  if($("body").hasClass("bio-active")) {
      $("body").removeClass("bio-active")
        .addClass("portfolio-active");
      currentSlideIndex++;

      const $previousSlide = $(".background").eq(currentSlideIndex - 1);
      $previousSlide.removeClass("up-scroll").addClass("down-scroll");

  }
}
