// Example Google Cast presentation Receiver app
// Cast module
//
// Created by: Amber Wareham
// Latest version: 2016-04-13


var CastManager = function() {
  console.log('Creating CastManager');

  this.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
  this.messageBus = this.castReceiverManager.getCastMessageBus('urn:x-cast:com.set.cast',
    cast.receiver.CastMessageBus.MessageType.JSON);

  cast.receiver.logger.setLevelValue(cast.receiver.LoggerLevel.DEBUG);

  this.initializeEventHandlers();
};

CastManager.prototype.initializeEventHandlers = function() {
  this.castReceiverManager.onSenderDisconnected = this.onSenderDisconnected;
  this.castReceiverManager.onSenderConnected = this.onSenderConnected;
  this.messageBus.onMessage = this.onMessage;
};

CastManager.prototype.start = function() {
  this.castReceiverManager.start();
};

CastManager.prototype.onSenderConnected = function(event) {
  console.log('Received onSenderConnected event', event);
};

CastManager.prototype.onSenderDisconnected = function(event) {
  console.log('Received onSenderDisconnected event', event);
  if(window.castReceiverManager.getSenders().length == 0 &&
      event.reason == cast.receiver.system.DisconnectReason.REQUESTED_BY_SENDER) {
    window.close();
  }
};

CastManager.prototype.onMessage = function(event) {
  console.log('Received onMessage event', event);

  if (event.data.type === 'chat') {
    console.log('Handling received \'chat\' message');

    var user = event.data.user;
    var msg = event.data.msg;
    var colour = event.data.colour;

    if (msg !== null) {
      messageManager.postNewMessage(user, msg, colour);
    }

  } else if (event.data.type === 'slide') {
    console.log('Handling received \'slide\' message');

    var action = event.data.slide;

    if (action === null) {
      console.warn('Received invalid \'slide\' message');
    } else {
      if (action === 'prev') {
        slideManager.prev();
      } else if (action === 'next') {
        slideManager.next();
      } else {
        console.warn('Received unsupported \'slide\' message with action:', action);
      }
    }
  }
};
