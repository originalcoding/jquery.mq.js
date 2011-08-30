// jquery plugin for dead simple message queing
$.mq = (function () {
    var MQ = {};

    return {
        /**
         * Get all messages for channel.
         */
        get: function (channel) {
            var items = [];

            while (MQ[channel] && MQ[channel].length) {
                items.push(MQ[channel].pop());
            };
            
            return items;
        },

        /**
         * Get last message for channel.
         */
        pop: function (channel) {
            return MQ[channel] && MQ[channel].pop();
        },
        
        /**
         * Put message into channel.
         */
        put: function (channel, msg) {
            if (!MQ[channel]) {
                MQ[channel] = [];
            };
            
            MQ[channel].push(msg);
        },
        
        /**
         * Get size of channel's queue.
         */
        size: function (channel) {
            var queue = MQ[channel];

            return queue ? queue.length : 0;
        }
    }
})();

