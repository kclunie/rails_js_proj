
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
	listenForClick()
	listenForClickAlpha() 
	listenForShowClick()
	listenForSubmitForm()
});


function listenForClick() {
	$('button#events-data').on('click', function (event) {
		event.preventDefault()
		getEvents()
	})
}

function listenForClickAlpha() {
	$('button#events-alpha').on('click', function (event) {
		event.preventDefault()
		console.log(event)
		getAlpha()
	})
}

function getAlpha(){
	$.ajax({
		url: 'http://localhost:3000/events',
		method: 'get',
		dataType: 'json'
	}).done(function (data){
		
		data.sort(function(a, b) {
			var nameA = a.name.toUpperCase(); // ignore upper and lowercase
			var nameB = b.name.toUpperCase(); // ignore upper and lowercase
			if (nameA < nameB) {
			  return -1;
			}
			if (nameA > nameB) {
			  return 1;
			}
		  
			// names must be equal
			return 0;
		  });
		  console.log(data)
		  data.map(event => {
		  const newEvent = new Event(event)
		  const newEventAlpha = newEvent.eventHTML()
		  document.getElementById('alpha-events').innerHTML += newEventAlpha
	})
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
				console.log(events)
			})
		})
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
}

Event.prototype.eventHTML = function () {
	let attendsCount = this.attends.length
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
			<p>Attendees: ${attendsCount}</p>
		</div>
	`)
}



function listenForShowClick(){
	$('.event-show-link').on('click', function(event){
	event.preventDefault();
	var eventLink = event.target;
	$.getJSON(eventLink.pathname)
	.done(function(data){
		var result = "";
		 var id = data.id;
		 var event = $("div[id|='" + id + "']");
		 result += "<p>" + data.details + "</p>";
		 event.append(result)
		console.log(data.id);
		console.log("yay")
	})
	.fail(function(data){
	console.log("Error: ");
	console.log(data);
	});
	});
}


function listenForSubmitForm(){
	$("#new_event").on("submit", function(e){
		e.preventDefault()
		console.log("submitting post")
		const valuess = $(this).serialize()

		$.post("/events", valuess).done(function(data){
			console.log(data)
			$("#new-event-container").html("")
			const newEvent = new Event(data)
			const htmlToAdd = newEvent.eventHTML()
			$("#new-event-container").html(htmlToAdd)
		})
	})
}


