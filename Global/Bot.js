//Bot class
var Bot = function(init,data,handlers) {
	this.data = data;
	this.handlers = handlers;
	this.init = init;
	for (var event in handlers) {
		EVENTS.bind(event,handler);
	}
	this.init();
};
