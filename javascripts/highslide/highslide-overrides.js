hs.graphicsDir = "/javascripts/highslide/graphics/";
hs.outlineType = "drop-shadow";
hs.wrapperClassName = "wide-border";
//hs.outlineWhileAnimating = true;
hs.showCredits = false;
hs.captionEval = "this.thumb.alt";

hs.transitions  = ["expand", "crossfade"];
hs.transitionDuration = 1000;


var imageOptions = {
  slideshowGroup: 'images',
};

var galleryOptions = new Array();
var ssg = new Array();
for (i = 0; i < 49; i++) {
  ssg[i] = i;
  galleryOptions[i] = {
  slideshowGroup: i,
  align: "center",
//  transitions: ["expand", "crossfade"],
 // transitionDuration: 1000,
  fadeInOut: true,
  marginBottom: 105, // make room for the thumbstrip and the controls
  dimmingOpacity: 0.8
};
}
// Add the slideshow providing the controlbar and the thumbstrip
hs.addSlideshow({
  slideshowGroup: ssg,
  interval: 5000,
  repeat: true,
  useControls: true,
  fixedControls: "fit",
  overlayOptions: {
    position: "bottom center",
    hideOnMouseOut: true
  },
  thumbstrip: {
    position: "bottom center",
    mode: "horizontal",
    relativeTo: "viewport"
  }
});
