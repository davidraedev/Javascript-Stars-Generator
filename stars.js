function stars(opacity,width,height) {
	var canvas = document.createElement("canvas");
	var stars = canvas.getContext('2d');
	var x;
	var y;
	var colornum;
	canvas.width = width;
	canvas.height = height;
	var inc = 1;
	for (x = 0; x < canvas.width; x = x + inc) {
		for (y = 0; y < canvas.height; y = y + inc) {
			// loop to determine the colornum of stars
			weight = Math.floor((Math.random() * 2000) + 1);
			if (weight > 1999) {
				// if series to determine what color and the percentage of each color the stars are
				weight2 = Math.floor((Math.random() * 25) + 1);
				lowpass = 0;
				// white
				if (weight2 >= 1 && weight2 <= 22) {
					colornum = Math.floor((Math.random() * 255) + 1);
					stars.fillStyle = "rgba("+ colornum +","+ colornum +","+ colornum +","+ opacity +")";
					stars.fillRect(x, y, inc, inc);
				}
				// blue
				else if (weight2 === 23) {
					colornum = Math.floor((Math.random() * 255) + 1);
					stars.fillStyle = "rgba("+ lowpass +","+ lowpass +","+ colornum +","+ opacity +")";
					stars.fillRect(x, y, inc, inc);
				}
				// red
				else if (weight2 === 24) {
					colornum = Math.floor((Math.random() * 255) + 1);
					stars.fillStyle = "rgba("+ colornum +","+ lowpass +","+ lowpass +","+ opacity +")";
					stars.fillRect(x, y, inc, inc);
				}
				// green
				else if (weight2 === 25) {
					colornum = Math.floor((Math.random() * 255) + 1);
					stars.fillStyle = "rgba("+ lowpass +","+ colornum +","+ lowpass +","+ opacity +")";
					stars.fillRect(x, y, inc, inc);
				}
			}
		}
	}
	document.body.style.backgroundImage = "url("+ canvas.toDataURL("image/png") +")";
}