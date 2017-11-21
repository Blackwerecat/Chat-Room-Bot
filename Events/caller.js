//Set up the events here, such as the message event
var messageEvent = Classroom.events.publicMessageEvent;
Classroom.events.publicMessageEvent = function(payload) {
	EVENTS.call('message-event',payload);
	messageEvent(payload);
};
