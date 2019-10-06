document.addEventListener('DOMContentLoaded', init)
function init(){
   console.log("hello")
   fetch('http://localhost:3000')
   .then(res => res.json())
   .then(res => console.log(res))
}

//testing123


// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
	listenForClick()
	listenForShowClick()
	listenForNewEventFormClick()
	listenForSubmitNewForm()
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


	function listenForNewEventFormClick() {
		$('button#ajax-new-event').on('click', function (event) {
			event.preventDefault()
			let newEventForm = Event.newEventForm()
			// $('div#new-post-form-div')
			document.querySelector('div#new-event-form-div').innerHTML = newEventForm

			//let eventForm = document.getElementById('submit-event-form')
			 //eventForm.addEventListener('submit', createEvent(event))
			//handlePostRequest()
		})
	}	

	function listenForSubmitNewForm() {
		$('button#submit-event-form').on('submit', function (event) {
			event.preventDefault()
			createEvent(event)
		})
	}	


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
			console.log('event being created')

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