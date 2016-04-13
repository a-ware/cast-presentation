// Example Google Cast presentation Receiver app
// Messaging module
//
// Created by: Amber Wareham
// Latest version: 2016-04-13


var Message = function (time, user, message, colour) {
  this.time = time;
  this.user = user;
  this.message = message;
  this.colour = colour;
}

var MessageManager = function(containerId, maxMessages) {
  this.container = $('#' + containerId);
  this.maxMessages = maxMessages;

  this.messageDivs = [];
};

MessageManager.prototype.initialize = function() {
  console.log("Initializing MessageManager")

  for (i = 0; i < NUM_MESSAGES; i++) {
    this.messageDivs[i] = document.getElementById('message' + i);
  }
}


MessageManager.prototype.postNewMessage = function (user, message, colour) {
  if (user === null) {
    user = 'unknown';
  }

  console.log('Posting message from %s:', user, message);

  // Cycle recent messages along with their 'priority' level styling
  for (i = NUM_MESSAGES - 1; i > 0; i--) {
    this.messageDivs[i].getElementsByClassName('message-time')[0].innerHTML = this.messageDivs[i - 1].getElementsByClassName('message-time')[0].innerHTML;
    this.messageDivs[i].getElementsByClassName('message-user')[0].innerHTML = this.messageDivs[i - 1].getElementsByClassName('message-user')[0].innerHTML;
    this.messageDivs[i].getElementsByClassName('message-user')[0].style.color = this.messageDivs[i - 1].getElementsByClassName('message-user')[0].style.color
    this.messageDivs[i].getElementsByClassName('message-content')[0].innerHTML = this.messageDivs[i - 1].getElementsByClassName('message-content')[0].innerHTML;
  }

  this.messageDivs[0].getElementsByClassName('message-time')[0].innerHTML = '[' + getCurrentTimeAsHhmmssString() + ']';
  this.messageDivs[0].getElementsByClassName('message-user')[0].innerHTML = user;
  this.messageDivs[0].getElementsByClassName('message-content')[0].innerHTML = ':  ' + message;

  if (colour !== null) {
    this.messageDivs[0].getElementsByClassName('message-user')[0].style.color = colour;
  } else {
    this.messageDivs[0].getElementsByClassName('message-user')[0].style.color = 'inherit';
  }
}

function getCurrentTimeAsHhmmssString() {
  var date = new Date();
  return (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
    + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
}

