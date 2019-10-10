// document.addEventListener('DOMContentLoaded', init)
// function init(){
//    console.log("hello")
//    fetch('http://localhost:3000')
//    .then(res => res.json())
//    .then(res => console.log(res))
// }

// function getEvent(){
	// 	$.ajax({
	// 		url:`http://localhost:3000/events/${id}`,
	// 		method: 'get',
	// 		dataType: 'json'
		
	// 	}).done(function(data){
	// 		//just fine the event whose id matches
	// 		data.filter(id => id = params[id])
	// 	})
	// }


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

	// //let myForm = document.getElementById('submit-event-form');
	// 	//let myForm = document.querySelector('form#submit-event-form')
	// //document.querySelector('form#submit-event-form')
	// var form = $('form#submit-event-form').get(0); 
	// let formData = new FormData(form);
	// formData.append('username', 'Chris');
	// console.log(formData)
    // console.log("formdataok")
    
    // const newEvent = new Event(event)
// events.push(newEvent)
// const newEventHtml = newEvent.eventHTML()



	// function listenForNewEventFormClick() {
	// 	$('button#ajax-new-event').on('click', function (event) {
	// 		event.preventDefault()
	// 		let newEventForm = Event.newEventForm()
	// 		// $('div#new-post-form-div')
	// 		document.querySelector('div#new-event-form-div').innerHTML = newEventForm
			
	// 		//handlePostRequest()
	// 	})
	// }



	// const baseUrl = 'http://localhost:3000/events'

// function createEventt(value){
// 	console.log("blaaaa")
// 	console.log(value)
// 	const event = {
// 		body: value,
// 	}
// 	return fetch(baseUrl, {
// 	method: 'POST',
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	body: JSON.stringify({ event }),
// 	}).then(res => res.json())
// }



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

	// function createEvent(event){
	// 	//$('button#submit-event-form').on('click', function (event) {
	// 		event.preventDefault()
	// 		console.log('event being createdyo')

	// 	}

	// function handlePostRequest(){
	// 	let event = document.querySelector('#event-name').value;
	// 	fetch('http://localhost:3000/events', {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			"Accept": "application/json"
	// 		},
	// 		body: JSON.stringify({name : event })
	// 		.then(resonse => resonse.json())
	// 		.then(events => {render(events)})
	// 	})
	// 	.catch(error => console.log(error))
    // }
    
    // function listenForShowClick2(){
// 	$('#see-event').on('click', function(event){
// 	event.preventDefault();
// 	console.log("here");
// 	console.log(event.target.value);
// 	})
// }

// function listenForSubmitNewForm(){
// newEventBody = document.getElementById('event-name')
// //newEventForm = document.getElementById('form#submit-event-form')
// //newEventForm = document.getElementById('form#submit-event-form')
// //newEventForm = document.querySelector('div#new-event-form-div')
// newEventForm = document.querySelector('form#submit-event-form')
// newEventForm.addEventListener('submit', this.createEvent2.bind(this))
// // newEventForm.addEventListener('submit', function(event){
// // 	event.preventDefault()
// // 	console.log('creating event2a')
// // 	console.log(this.newEventBody.value)
// // })
// }

// function createEvent2(event){
// 	console.log(this)
// event.preventDefault()
// console.log('creating event2')
// console.log(this.newEventBody.value)
// //const newEvent = new Event(event)
// //const newEvent = new Event(this.newEventBody.value)
// const value = this.newEventBody.value
// //console.log(newEvent)
// this.createEvent(value).then(event => {console.log(event)})
// }

	// function createEvent( value ) {
	// 	console.log("jjjjjjj")
	// 	console.log(value)
	// 	let formData = {
	// 		name: value,
	// 		//dogBreed: "Poodle"
	// 	  };
	// 	return fetch( 'http://localhost:3000/events', {
	// 		method: "POST",
	// 		headers: {
	// 		  "Content-Type": "application/json",
	// 		  "Accept": "application/json"
	// 		},
	// 		body: JSON.stringify( {
	// 		  formData
	// 		} )
	// 	  } )
	// 	  .then( function ( response ) {
	// 		return response.json()
	// 	  } )
	// 	  .then( function ( object ) {
	// 		document.body.innerHTML = object[ "id" ]
	// 		console.log(object)
	// 	  } )
	// 	//   .catch( function ( error ) {
	// 	// 	document.body.innerHTML = error.message
	// 	//   } )
	//   }



	// function listenForClick() {
	// 	$('button#events-data').on('click', function (event) {
	// 		event.preventDefault()
	// 		getEvents()
	// 	})
	// }


    // <button id='ajax-new-event'>New Event</button>
    // <div id="new-event-form-div">[form]</div>
    // <strong>New event form</strong>
    // <form id='submit-event-form' name='submit-event-form'>
    //     Name: <input id='event-name' type='text' name='name'></input><br>
    //     Date: <input type='text' name='date'></input><br>
    //     Location: <input type='text' name='location'></input><br>
    //     Details: <input type='text' name='details'></input><br>
    //     <input type='submit' />
    // </form>

    //LINK on event to see show page
	//<a id='see-event' href="http://localhost:3000/events/${this.id}">See Event</a>
	
	// Show rsvps listed out by number
	//	<p>Attendees: ${eventAttends}</p> 