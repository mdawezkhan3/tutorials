class Emitter {
  constructor(){
    this._events = {}
  }
  // Subscribe to certain event
  on(event, callback) {
    if(!this._events[event]){
      this._events[event]= []
    }
    this._events[event].push(callback)
  }

  // Unsubscribe from certain event
  off(event, callback) {
    if(!this._events[event]){
      // console.log('cant remove does not exist')
      throw new Error('Does not exist')
    }
    this._events[event] = this._events[event].filter((item) => item !== callback)
  }

  // Notify the subscribers
  emit(event, data) {
    if(!this._events[event]){
      throw new Error('does not exist')
    }
    
    this._events[event].forEach((callback) => {
      callback(data)
    })
  }
}



const e = new Emitter()

function callback(data) {
	console.log('hey -',data)
}

e.on('test', callback)
// e.off('test', callback)
e.emit('test', 'lalit')
e.off('test', callback)
e.emit('test', 'new lalit')
// e.on('click', callback)
// e.off('click', callback)
// e.emit('click', 'lalit')

