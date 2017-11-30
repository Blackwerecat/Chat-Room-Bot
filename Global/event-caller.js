var EVENTS = {events:{},
	bind:function(event,func) {
		if (this.events[event]) {
			this.events[event].push(func);
				return events.length-1
			}else {
				this.events[event] = [func];
			return 0;
		}
	},
	unbind:function(event,index) {
		this.events[event].splice(index,index+1);
	},
	call:function(event,payload) {
		for (i in this.events[event]) {
			setTimeout(function(){this.events[event][i](payload);},0);
		}
	}};
