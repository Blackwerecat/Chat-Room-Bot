var messageEvent = Classroom.events.publicMessageEvent;
Classroom.events.publicMessageEvent = function(payload) {
	EVENTS.call('message-event',payload);
	messageEvent(payload);
};
