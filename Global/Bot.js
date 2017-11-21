//Bot class
var Bot = function(init,data,handlers) {
	this.data = data;
	this.handlers = handlers;
	this.init = init;
	for (event in handler) {
		EVENTS.bind(event,handler);
	}
	this.init();
};
