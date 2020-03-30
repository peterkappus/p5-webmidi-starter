# p5.js WebMidi Starter pack
A starter pack to get going with p5.js visualisations using WebMidi


## Background
[p5js](https://p5js.org/) is an awesome creative coding library for the web. It's easy to learn, has a robust community, and can run in any browser.

[WebMidi.js](https://github.com/djipco/webmidi) provides a nice wrapper high-level wrapper for the native [WebMidi API](https://webaudio.github.io/web-midi-api/).

Together you can use these to make awesome custom visualisations from any midi signals.

## Getting started
Clone this repo into a folder, open up the "index.html" file, play some notes on your midi keyboard. It should Just Work™. If not, you may need to check your midi setup.

## How it works?
The brains are in the "sketch.js" There are 4 functions to know about

`setup`
This function runs when the sketch opens. Use this to create a canvas to draw on and do any other initialization. 

`draw`
This function gets run every time the screen refreshes. Use this to animate your objects.

`Disc`
This class contains the constructor for the "discs" and methods for drawing them and a "step" function called to modulate the radius.


