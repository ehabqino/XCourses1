define([], 
    function() {
        class MsgBroker {
            constructor(){
                this.subcribers = {}
            }
            publish(groupName, data){
                if(! Array.isArray(this.subcribers[groupName]))
                    return;
                this.subcribers[groupName].forEach(callbackNotify => {
                    callbackNotify(data);
                });

            }//end publish

            subcribe(groupName, callbackNotify){
                if(! Array.isArray(this.subcribers[groupName]))
                    this.subcribers[groupName]=[];
                let exists = false;
                  this.subcribers[groupName].forEach(savedCallback => {
                      if(savedCallback.toString() == callbackNotify.toString()) //using toString to compare two functions
                            exists =true;
                  });
    
                 if(!exists)
                    this.subcribers[groupName].push(callbackNotify);

            }//end subcribe

        }// end MsgBroker class
        return new MsgBroker;
});// end define