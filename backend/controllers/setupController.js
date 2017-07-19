var CardGen = require('../models/cardGenModel');

module.exports = function(app) {

	app.get('/api/setupCardGen', function(req,res) {

		//seed database

		var starterCardGen = [
			{
				username: 'ankit',
				quesType: 'javasript',
				question: 'What is a variable?',
				answer: 'A place to store data.',
				difficulty: 'easy'
			},
						{
				username: 'ankit',
				quesType: 'javasript',
				question: 'What is JavaScript\'s this keyword?',
				answer: 'JavaScript\'s this keyword normally refers to the object that owns the method, but it depends on how a function is called. Basically, it points to the currently in scope object that owns where you are in the code. When working within a Web page, this usually refers to the Window object. If you are in an object created with the new keyword, the this keyword refers to the object being created. When working with event handlers, JavaScript\'s this keyword will point to the object that generated the event.',
				difficulty: 'easy'
			},
						{
				username: 'ankit',
				quesType: 'javasript',
				question: 'What is event bubbling?',
				answer: 'Event bubbling describes the behavior of events in child and parent nodes in the Document Object Model (DOM); that is, all child node events are automatically passed to its parent nodes. The benefit of this method is speed, because the code only needs to traverse the DOM tree once. This is useful when you want to place more than one event listener on a DOM element since you can put just one listener on all of the elements, thus code simplicity and reduction. One application of this is the creation of one event listener on a page\'s body element to respond to any click event that occurs within the page\'s body.',
				difficulty: 'easy'
			},
						{
				username: 'johanes',
				quesType: 'javasript',
				question: 'What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?',
				answer: 'This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.  Another feature of this technique is to allow for an easily referenceable (presumably shorter) alias for a global variable. This is often used, for example, in jQuery plugins. jQuery allows you to disable the $ reference to the jQuery namespace, using jQuery.noConflict(). If this has been done, your code can still use $ employing this closure technique, as follows: (function($) { /* jQuery plugin code referencing $ */ } )(jQuery);',
				difficulty: 'easy'
			},
						{
				username: 'johanes',
				quesType: 'javasript',
				question: 'What is JavaScript?',
				answer: 'JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.',
				difficulty: 'easy'
			},
						{
				username: 'johanes',
				quesType: 'javasript',
				question: 'What is one advantage for using JavaScript?',
				answer: 'Less server interaction − You can validate user input before sending the page off to the server. This saves server traffic, which means less load on your server.',
				difficulty: 'easy'
			},
						{
				username: 'sharon',
				quesType: 'javasript',
				question: 'How do you create an Object in JavaScript?',
				answer: 'var emp = {name: "Zara",   age: 10};',
				difficulty: 'easy'
			},
						{
				username: 'sharon',
				quesType: 'javasript',
				question: 'How to define an anonymous function?',
				answer: 'An anonymous function can be defined in similar way as a normal function but it would not have any name.',
				difficulty: 'easy'
			},
						{
				username: 'sharon',
				quesType: 'javasript',
				question: 'Name some of JavaScript features?',
				answer: 'Following are the features of JavaScript:  1) JavaScript is a lightweight, interpreted programming language. 2) JavaScript is designed for creating network-centric applications. 3) JavaScript is complementary to and integrated with Java. 4)  JavaScript is is complementary to and integrated with HTML. 5) JavaScript is open and cross-platform.',
				difficulty: 'easy'
			},

		];

		CardGen.create(starterCardGen, function(err, results) {
			res.send(results);
		});
	});
}