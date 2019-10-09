document.addEventListener('DOMContentLoaded', init)
function init(){
   console.log("hello")
   fetch('http://localhost:3000')
   .then(res => res.json())
   .then(res => console.log(res))
}

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
	listenForClick()
	listenForShowClick()
	//listenForNewEventFormClick()
	listenForSubmitNewForm()
	//listenForNewEventForm2()
	//listenForSubmitNewForm3()
	
});


function listenForClick() {
	$('button#events-data').on('click', function (event) {
		event.preventDefault()
		getEvents()
	})
}



function getEvents() {
	$.ajax({
		url: 'http://localhost:3000/events',
		method: 'get',
		dataType: 'json'
	}).done(function (data){

			console.log("the data is: ", data)
			data.map(event => {
				const newEvent = new Event(event)
				events.push(newEvent)
				const newEventHtml = newEvent.eventHTML()
				document.getElementById('ajax-events').innerHTML += newEventHtml
			})
		})
	}

	function getEvent(){
		$.ajax({
			url:`http://localhost:3000/events/${id}`,
			method: 'get',
			dataType: 'json'
		
		}).done(function(data){
			//just fine the event whose id matches
			data.filter(id => id = params[id])
		})
	}


	// function listenForNewEventFormClick() {
	// 	$('button#ajax-new-event').on('click', function (event) {
	// 		event.preventDefault()
	// 		let newEventForm = Event.newEventForm()
	// 		// $('div#new-post-form-div')
	// 		document.querySelector('div#new-event-form-div').innerHTML = newEventForm
			
	// 		//handlePostRequest()
	// 	})
	// }	

	// function listenForSubmitNewForm3(){
	// 	let eventForm = document.querySelector('form#submit-event-form')
	// 	eventForm.addEventListener('submit', createEvent(event))
	// }

	// function listenForSubmitNewForm2() {
	// 	$('form#submit-event-form').on('submit', function (event) {
	// 		event.preventDefault()
	// 		console.log('event being createddd')
	// 		createEvent(event)
	// 		console.log('event being createdeee')
	// 		// event.preventDefault()
	// 		// console.log('event being created')
	// 	})
	// }	


//  	function listenForSubmitNewForm(){
// 		this.newEventBody = document.getElementById('event-name')
// 		this.eventForm = document.getElementById('submit-event-form')
// 		this.eventForm.addEventListener('submit', this.createEvent)
//  }


//  	createEvent(e){
// 		 console.log(this)
// 		e.preventDefault()
// 		console.log(this.newEventBody.value)
// 		 }


	function createEvent(event){
		//$('button#submit-event-form').on('click', function (event) {
			event.preventDefault()
			console.log('event being createdyo')

		}

	function handlePostRequest(){
		let event = document.querySelector('#event-name').value;
		fetch('http://localhost:3000/events', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({name : event })
			.then(resonse => resonse.json())
			.then(events => {render(events)})
		})
		.catch(error => console.log(error))
	}

	const events = []

class Event {
	constructor(obj) {
		this.id = obj.id
		this.name = obj.name
		this.date = obj.date
        this.location = obj.location
		this.details = obj.details
		this.attends = obj.attends
		//this.listenForSubmitNewForm()
	}

	// listenForSubmitNewForm(){
	// 	this.newEventBody = document.getElementById('event-name')
	// 	//newEventForm = document.getElementById('form#submit-event-form')
	// 	//newEventForm = document.getElementById('form#submit-event-form')
	// 	//newEventForm = document.querySelector('div#new-event-form-div')
	// 	this.newEventForm = document.querySelector('form#submit-event-form')
	// 	this.newEventForm.addEventListener('submit', this.createNote2.bind(this))
	// 	.catch(error => console.log(error))
	// 	}
		
	// 	createNote2(event){
	// 		console.log(this)
	// 	event.preventDefault()
	// 	console.log('creating event2')
	// 	console.log(this.newEventBody.value)
	// 	}

	static newEventForm() {
		return (`
		<strong>New event form</strong>
			<form id='submit-event-form'>
				Name: <input id='event-name' type='text' name='name'></input><br>
                Date: <input type='text' name='date'></input><br>
                Location: <input type='text' name='location'></input><br>
                Details: <input type='text' name='details'></input><br>
				<input type='submit' />
			</form>
		`)
	}

//  	listenForSubmitNewForm(){
// 		this.newEventBody = document.getElementById('event-name')
// 		this.eventForm = document.getElementById('submit-event-form')
// 		this.eventForm.addEventListener('submit', this.createEvent.bind(this))
//  }


//  	createEvent(e){
// 		 console.log(this)
// 		e.preventDefault()
// 		console.log(this.newEventBody.value)
// 		 }
		 
}

Event.prototype.eventHTML = function () {
	let eventAttends = this.attends.map(rsvp => {
		return (`
			<p>${rsvp.guest}</p>
		`)
	}).join('')

	return (`	
		<div class='post'>
			<h3>${this.name}</h3>
            <p>${this.date}</p>
            <p>${this.location}</p>
            <p>${this.details}</p>
			<p>Attendees: ${eventAttends}</p>
			<a id='see-event' href="http://localhost:3000/events/${this.id}">See Event</a>
		</div>
	`)
}

function listenForShowClick2(){
	$('#see-event').on('click', function(event){
	event.preventDefault();
	console.log("here");
	console.log(event.target.value);
	})
}

function listenForShowClick(){
	$('.event-show-link').on('click', function(event){
	event.preventDefault();
	var eventLink = event.target;
//debugger
	$.getJSON(eventLink.pathname)
	.done(function(data){
		var result = "";
		 var id = data.id;
		 var event = $("div[id|='" + id + "']");
		// var event = $(`div${id}`)
		//var event = $("div[id|=${id}]");

		 result += "<p>" + data.details + "</p>";
		 //event.find("h1").after(result);
		 event.append(result)

		console.log(data.id);
		console.log("yay")
		//document.getElementById('whatever').innerHTML = data.details
		//debugger
	})
	.fail(function(data){
	console.log("Error: ");
	console.log(data);
	});
	});
}

function listenForSubmitNewForm(){
newEventBody = document.getElementById('event-name')
//newEventForm = document.getElementById('form#submit-event-form')
//newEventForm = document.getElementById('form#submit-event-form')
//newEventForm = document.querySelector('div#new-event-form-div')
newEventForm = document.querySelector('form#submit-event-form')
newEventForm.addEventListener('submit', this.createEvent2.bind(this))
// newEventForm.addEventListener('submit', function(event){
// 	event.preventDefault()
// 	console.log('creating event2a')
// 	console.log(this.newEventBody.value)
// })
}

function createEvent2(event){
	console.log(this)
event.preventDefault()
console.log('creating event2')
console.log(this.newEventBody.value)
//const newEvent = new Event(event)
//const newEvent = new Event(this.newEventBody.value)
const value = this.newEventBody.value
//console.log(newEvent)
this.createEvent(value).then(event => {console.log(event)})
}

const baseUrl = 'http://localhost:3000/events'

function createEventt(value){
	console.log("blaaaa")
	console.log(value)
	const event = {
		body: value,
	}
	return fetch(baseUrl, {
	method: 'POST',
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({ event }),
	}).then(res => res.json())
}


// let formData = {
// 	name: name,
// 	//dogBreed: "Poodle"
//   };
   
//   let configObj = {
// 	method: "POST",
// 	headers: {
// 	  "Content-Type": "application/json",
// 	  "Accept": "application/json"
// 	},
// 	body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/events", configObj)
// 	.then(function(response) {
// 	  return response.json();
// 	})
// 	.then(function(object) {
// 	  console.log(object);
// 	});


	function createEvent( value ) {
		console.log("jjjjjjj")
		console.log(value)
		let formData = {
			name: value,
			//dogBreed: "Poodle"
		  };
		return fetch( 'http://localhost:3000/events', {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			  "Accept": "application/json"
			},
			body: JSON.stringify( {
			  formData
			} )
		  } )
		  .then( function ( response ) {
			return response.json()
		  } )
		  .then( function ( object ) {
			document.body.innerHTML = object[ "id" ]
			console.log(object)
		  } )
		//   .catch( function ( error ) {
		// 	document.body.innerHTML = error.message
		//   } )
	  }

	// function listenForNewEventFormClick() {
	// 	$('button#ajax-new-event').on('click', function (event) {
	// 		event.preventDefault()
	// 		let newEventForm = Event.newEventForm()
	// 		// $('div#new-post-form-div')
	// 		document.querySelector('div#new-event-form-div').innerHTML = newEventForm
			
	// 		//handlePostRequest()
	// 	})
	// }