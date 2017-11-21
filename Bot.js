//Bot class
var Bot = function(data,handlers) {
	this.data = data;
	this.handlers = handlers;
	for (event in handler) {
		EVENTS.bind(event,handler);
	}
};
