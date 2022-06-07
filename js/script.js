
let currentSlideIndex;

const portfolio = [
  {
    "href": "portfolio/p_lbr_all.jpg",
    "title": `
      <b>Band promos for Lost Beyond Redemption, 1/3</b>. Originals taken indoors by a photographer, and then retouched to a predefined
      color scheme and style.
      `
  },
  {
    "href": "portfolio/p_lbr_mh.jpg",
    "title": `
    <b>Band promos for Lost Beyond Redemption, 2/3</b>. Originals taken indoors by a photographer, and then retouched to a predefined
    color scheme and style.
      `
  },
  {
    "href": "portfolio/p_lbr_tu.jpg",
    "title": `
    <b>Band promos for Lost Beyond Redemption, 3/3</b>. Originals taken indoors by a photographer, and then retouched to a predefined
    color scheme and style.
      `
  },
  {
    "href": "portfolio/p_mammoth_sun_halo.jpg",
    "title": `
      <b>Spotify Cover Art set, 1/4</b>. A rugged and grungy look to suit the project. The design aims to use a similar theme 
      in all four covers, to provide an uniform look and feel into an artist's Spotify profile where 
      all cover art gets shown side by side.
      `
  },
  {
    "href": "portfolio/p_mammoth_sun_ascent.jpg",
    "title": `
      <b>Spotify Cover Art set, 2/4</b>. A rugged and grungy look to suit the project. The design aims to use a similar theme 
      in all four covers, to provide an uniform look and feel into an artist's Spotify profile where 
      all cover art gets shown side by side.
      `
  },  
  {
    "href": "portfolio/p_mammoth_sun_derelict.jpg",
    "title": `
      <b>Spotify Cover Art set, 3/4</b>. A rugged and grungy look to suit the project. The design aims to use a similar theme 
      in all four covers, to provide an uniform look and feel into an artist's Spotify profile where 
      all cover art gets shown side by side.
      `
  },  
  {
    "href": "portfolio/p_mammoth_sun_landings.jpg",
    "title": `
      <b>Spotify Cover Art set, 4/4</b>. A rugged and grungy look to suit the project. The design aims to use a similar theme 
      in all four covers, to provide an uniform look and feel into an artist's Spotify profile where 
      all cover art gets shown side by side.
      `
  },
  {
    "href": "portfolio/p_getback_1of6.jpg",
    "title": `
      <b>Get Back 1/6</b>. A print design for a magazine article. A coursework design assignment at Helsinki Design School. 
      `
  },
  {
    "href": "portfolio/p_getback_2of6.jpg",
    "hide_thumbnail": true,
    "title": `
      <b>Get Back 2/6</b>. A print design for a magazine article. A coursework design assignment at Helsinki Design School. 
      `
  },  
  {
    "href": "portfolio/p_getback_3of6.jpg",
    "hide_thumbnail": true,
    "title": `
      <b>Get Back 3/6</b>. A print design for a magazine article. A coursework design assignment at Helsinki Design School. 
      `
  },  
  {
    "href": "portfolio/p_getback_4of6.jpg",
    "hide_thumbnail": true,
    "title": `
    <b>Get Back 4/6</b>. A print design for a magazine article. A coursework design assignment at Helsinki Design School. 
    `
  },  
  {
    "href": "portfolio/p_getback_5of6.jpg",
    "hide_thumbnail": true,
    "title": `
      <b>Get Back 5/6</b>. A print design for a magazine article. A coursework design assignment at Helsinki Design School. 
    `
  },  
  {
    "href": "portfolio/p_getback_6of6.jpg",
    "hide_thumbnail": true,
    "title": `
    <b>Get Back 6/6</b>. A print design for a magazine article. A coursework design assignment at Helsinki Design School. 
    `
  },
  {
    "href": "portfolio/p_thanatos_1of3.jpg",
    "title": `
      <bThanatos, 1/3</b>. A print design for a 53-page academic journal. The client provided the texts and images, but gave otherwise 
      full creative freedom for the typography and layout.
      `
  },
  {
    "href": "portfolio/p_thanatos_2of3.jpg",
    "hide_thumbnail": true,
    "title": `
      <bThanatos, 2/3</b>. A print design for a 53-page academic journal. The client provided the texts and images, but gave otherwise 
      full creative freedom for the typography and layout.
      `
  },
  {
    "href": "portfolio/p_thanatos_3of3.jpg",
    "hide_thumbnail": true,
    "title": `
      <bThanatos, 3/3</b>. A print design for a 53-page academic journal. The client provided the texts and images, but gave otherwise 
      full creative freedom for the typography and layout.
      `
  },
  {
    "href": "portfolio/p_sneakerhead.jpg",
    "title": `
      <b>Sneakerhead</b>. A logo design and usage mockup idea for a fictional sneaker brand <b>Sneakerhead</b>. A coursework design assignment at Helsinki Design School.
      `
  },
  {
    "href": "portfolio/p_norden.jpg",
    "title": `
      <b>Norden</b>, a tourism poster idea for The Nordics. A nordic noir theme, with still emphasis on the majestic nature. 
      A coursework design assignment at Helsinki Design School.
      `
  },
  {
    "href": "portfolio/p_yngwie_more.jpg",
    "title": `
      <b>Yngwie vs. Shepard</b>. A mashup of Shepard Fairey's classic design "Hope", combined with guitarist Yngwie Malmsteen's 
      catchprase of more always being more. A coursework design assignment at Helsinki Design School.
      `
  },
  {
    "href": "portfolio/p_the_mandalorian.jpg",
    "title": `
      <b>The Mandalorian</b>. A movie poster mashup, in the style of <a href="https://www.imdb.com/title/tt1440728/" target="_blank">The American</a>
      but with Mandalorian theme and characters.
      `
  },
  {
    "href": "portfolio/p_minion_peaks.jpg",
    "title": `
      <b>Minion Peaks</b>. A poster design mashup, in the style of <a href="https://www.imdb.com/title/tt4093826" target="_blank"/> Twin Peaks from 2017</a>
      but mashed up with the Minions from the movie Despicable Me.
      `
  },
  {
    "href": "portfolio/p_max_beane.jpg",
    "title": `
      <b>Max Beane</b>. A video game art mashup, in the style of Max Payne art from 2001, but with Mr. Bean as the main character.
      `
  }
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
        "class": `portfolio-item m-1 ${_.has(p, "hide_thumbnail") && p.hide_thumbnail ? 'd-none' : '' }`,
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
