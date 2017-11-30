var EVENTS = {events:{},
	bind:function(event,func) {
		if (this.events[event]) {
			EVENTS.events[event].push(func);
			return EVENTS.events[event].length-1
		}else {
			EVENTS.events[event] = [func];
			return 0;
		}
	},
	unbind:function(event,index) {
		EVENTS.events[event].splice(index,1);
	},
	call:function(event,payload) {
		for (i in this.events[event]) {
			setTimeout(function(){EVENTS.events[event][i](payload);},0);
		}
	}};
