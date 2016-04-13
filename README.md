# About This Project

This repository hosts a Google Cast presentation Receiver app.  The receiver supports slide navigation and displaying received chat messages.

# Learn more about the Google Cast SDK

https://developers.google.com/cast/docs/developers

## Building Sender Apps

* https://developers.google.com/cast/docs/chrome_sender
* https://developers.google.com/cast/docs/android_sender
* https://developers.google.com/cast/docs/ios_sender

## Building a Custom Receiver

* https://developers.google.com/cast/docs/custom_receiver

# Presentation Receiver Interaction

## Sending messages to the Presentation Reciever

The receiver uses the names space `urn:x-cast:com.set.cast` to handle two types of incoming messages with a JSON payload:
* 'chat'
* 'slide'

### Chat Messages

The presentation Receiver

```json
{
  'type' : 'chat'
  'user' : 'your user name',
  'msg' : 'your message'
}
```

### Slide Control Messages

Next slide:

```json
{
  'type' : 'slide',
  'slide' : 'next'
}
```

Previous slide:

```json
{
  'type' : 'slide',
  'slide' : 'prev'
}
```

Go to slide _(currently unsupported)_:

```json
{
  'type' : 'slide',
  'slide' : 42
}
```