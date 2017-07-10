$(document).ready(startStuff);
// Note that we don't put any quotes around startStuff... we want to refer to
// a function, not a string. At least not here... if we used a string, jQuery
// would try to match a CSS function.

function startStuff () {
	// Here we've abstracted out the starting function to keep things clean.
	$('a').smoothScroll();

	// What is this line above doing? Well, let's break it down.

	// $ - this is a call to jQuery. We know it's a function, as it is
	// followed by round brackets.

	// 'a' - It's got quotes around it... so it must be a String! And jQuery
	// will treat this string as a CSS selector. So what's it going to select?
	// a... what is a? That's right, it's the <a> tag, anchor or link tag.

	// The . is a chain - with the a tags selected, attach the smoothScroll
	// function to them. smoothScroll() only exists, because we brought in the
	// script. Always check the documentation for what you want to use... it
	// will give you the information you need. Otherwise, you wouldn't know
	// what information to pass to the functions, or even the names of
	// the functions!

	// It's the same with jQuery itself. To know what jQuery can do for us,
	// the documentation will tell us. The API (Application Programming
	// Interface), which is a bit like a dictionary, can be found here:
	// http://api.jquery.com/

	// The actual starting guide, and how to begin with jQuery, can be found
	// with the documentation. http://learn.jquery.com/

	// Those links are just for reference and interest. Remember, you don't
	// need to go super crazy with jQuery! Just getting a bit of a "hands on"
	// experience, and using it to add some interactivity and interest to
	// our pages.

	// Let's be a bit fancy with the introduction...
	var theDate = new Date();
	var theHour = theDate.getHours();

	// You can probably guess what this next bit does. Normally I don't go in to
	// this stuff just yet, but I though it would be fun. An if () { } statement
	// is a special kind of function. It's not quite a function per se, but it
	// acts a lot like one. The form is:
	//
	// if (something that is true) {
	//     # do stuff
	// }
	//
	// You can extend it a lot as well... first, must always be an "if". But
	// this can be followed by any number of "else if" statements! They will
	// only run, if each of the *previous* if questions in the set has an
	// answer of false.
	//
	// To catch any other possibilities, you can add an optional last set
	// called "else".
	//
	// The combinations you can have are:
	// - if
	// - if - else if [else if...]
	// - if - else if [else if...] - else
	// - if - else
	//
	// Here, this set uses all three types.
	if (theHour >= 23 || theHour <= 2) {
		// The || in the if statement means "or".
		// For interest, an "and" is written as &&
		// The >= means greater than or equal to, and <= means less than or
		// equal to. You can also use > or < on their own. BUT! But but but...
		// If you want to check if a is equal to b, you must use == two equals.
		// Otherwise, you are setting a value, like when we set the variables
		// with our name, age etc.

		// Not sure what jQuery.html() does? You could check the API docs,
		// but to save you the time, it replaces the HTML inside the matched
		// selector with whatever you send to the .html() function.
		$('.intro').html('Up late, I see&hellip;');
	}
	else if (theHour <= 7) {
		// I felt like using single spaces today. We deal with apostrophes in
		// contractions like this by "escaping" them with a \ symbol. This is
		// a bit tricky, so easier to just avoid them if you can... at least
		// for now.
		$('.intro').html('What is this hour of the night I don\'t even&hellip;');
	}
	else if (theHour <= 10) {
		$('.intro').html('Morning!');
	}
	else if (theHour <= 9) {
		$('.intro').html('Morning!');
	}
	else if (theHour <= 12) {
		$('.intro').html('Good day!');
	}
	else if (theHour <= 17) {
		$('.intro').html('Good afternoon!');
	}
	else {
		$('.intro').html('Good evening!');
	}

	// Continue on...
	$('.intro').hide().fadeIn(3 * 1000);
}