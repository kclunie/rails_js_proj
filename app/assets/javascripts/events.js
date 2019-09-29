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
});

const faf = 12

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
		dataType: 'json',
		success: function (data) {
			console.log("the data is: ", data)
			data.map(event => {
				const newEvent = new Event(event)
				const newEventHtml = newEvent.eventHTML()
				document.getElementById('ajax-events').innerHTML += newEventHtml
			})
		}
	})
}

class Event {
	constructor(obj) {
		this.id = obj.id
		this.name = obj.name
		this.date = obj.date
        this.location = obj.location
        this.details = obj.details
	}

	static newEventForm() {
		return (`
		<strong>New event form</strong>
			<form>
				<input id='event-name' type='text' name='name'></input><br>
                <input type='text' name='date'></input><br>
                <input type='text' name='location'></input><br>
                <input type='text' name='details'></input><br>
				<input type='submit' />
			</form>
		`)
	}
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
			<p>${eventAttends}</p>
		</div>
	`)
}