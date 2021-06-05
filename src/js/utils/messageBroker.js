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

            }//end subcribe

        }// end MsgBroker class
        return new MsgBroker;
});// end define