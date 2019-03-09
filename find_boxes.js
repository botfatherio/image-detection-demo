// Read the Image and Vision APIs documentation to lear more.
// https://botfather.io/docs/

var screenshot = new Image("screenshot.png");
var box_template = new Image("box.png");

var matches = Vision.findMatches(screenshot, box_template, 0.99);
Helper.log(matches.length, "boxes have been found:")

for (var i = 0; i < matches.length; i++) {
	Helper.log(matches[i]);
}

var output = Vision.markMatches(screenshot, matches, new Color("red"));
output.save("output.png");

Helper.log("The matches have been marked red on a newly created image.");
Helper.log("That output image which has been saved as 'output.png'");
Helper.log("Open the bots folder to view it.");
