define([], 
    function() {
        class MsgBroker {
            constructor(){
                this.subscribers = {}
            }
            publish(groupName, data){
                if(! Array.isArray(this.subscribers[groupName]))
                    return;
                this.subscribers[groupName].forEach(callbackNotify => {
                    callbackNotify(data);
                });

            }//end publish

            subscribe(groupName, callbackNotify){
                if(! Array.isArray(this.subscribers[groupName]))
                    this.subscribers[groupName]=[];
                let exists = false;
                  this.subscribers[groupName].forEach(savedCallback => {
                      if(savedCallback.toString() == callbackNotify.toString()) //using toString to compare two functions
                            exists =true;
                  });
    
                 if(!exists)
                    this.subscribers[groupName].push(callbackNotify);

            }//end subcribe

        }// end MsgBroker class
        return new MsgBroker;
});// end define