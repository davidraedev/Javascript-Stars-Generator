Javascript-Stars-Generator
==========================

This is a simple Canvas-based script to generate random star images

The background is transparent so the stars can be overlayed on pretty much anything.
As is it sets the body background-image to the overlay.
I could see this being tweaked to add some noise or texture to things.


Usage:
	generateStars (opacity, width, height)
	
Example: 
	generateStars (.8, 700, 700)
	
	
Opacity range is 0-1.
I find opacity between .7 and 1 too look nice.
Dimensions of 600x600 and above minimize the repeating.

Extras:
	Play around with the inc variable to make the stars bigger
	Also tweak the weight and weight2 stuff to change how many stars and colors