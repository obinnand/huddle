//  scrol reveal animations
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: "3000",
  delay: "600",
  // reset: true
});

// hero
sr.reveal(".hero--text", { origin: "top" });

// features
sr.reveal(".hero--pic", { distance: "100px", interval: 100 });

// features
sr.reveal(".Formed", { distance: "100px", interval: 100 });

// steps
sr.reveal(".steps--step", { distance: "100px", interval: 100 });

// about
sr.reveal(".about--text", { origin: "left" });
sr.reveal(".about--image", { origin: "right", delay: 800 });

//
sr.reveal(".map", { delay: 800 });
sr.reveal(".map-text");

//
sr.reveal(".Privacy-Policy", { delay: 1000 });

//
sr.reveal(".care", { delay: 600, distance: "100px", interval: 100 });

//
sr.reveal(".address");
