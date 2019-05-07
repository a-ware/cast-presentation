# About This Project

This repository hosts a Google Cast receiver application that facilitates delivering a presention.  The receiver supports slide navigation and displaying received chat messages.  This was a school project developed in 2016 to deliver a presentation about how to build Google Cast applications for Chromecast, focusing on how to develop an Android sender app and a HTML/JavaScript receiver app.

Download the Chrome browser [cast extension](https://chrome.google.com/webstore/detail/google-cast/boadgeojelhgndaghljhdicfkmllpafd?hl)

# Learn More About the Google Cast SDK

https://developers.google.com/cast/docs/developers

## Building Sender Apps

* https://developers.google.com/cast/docs/chrome_sender
* https://developers.google.com/cast/docs/android_sender
* https://developers.google.com/cast/docs/ios_sender

## Building a Custom Receiver

* https://developers.google.com/cast/docs/custom_receiver

## Sample Apps

* https://github.com/googlecast
* https://github.com/googlecast/CastHelloText-chrome
* https://github.com/googlecast/CastHelloText-android
* https://github.com/googlecast/CastHelloText-ios

# Presentation Receiver Interaction

## Sending Messages to the Presentation Reciever

The receiver uses the namespace `urn:x-cast:com.set.cast` to handle two types of incoming messages with a JSON payload:
* chat
* slide

### Chat Messages

Send a message:

```json
{
  'type' : 'chat',
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
