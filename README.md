# touchosc-dj
Scripts and layouts for using TouchOSC as a DJ controller for Mixxx

## Usage

### Setting up TouchOSC

First, get TouchOSC for your tablet from the appropriate app store (about 10$). Then get [TouchOSC Bridge](https://hexler.net/touchosc#resources) (free) for your desktop. Bridge lets you output MIDI or Open Sound Control messages to your computer (Mixxx uses MIDI). Load `dj.tosc` on your tablet (via iCloud or OneDrive or such) and connect it via USB (for best latency) to your computer. Tap the chain link icon in the app and go to MIDI, then enable Connection 1 and choose <Bridge 1> as Send/receive. Then go to Bridge, enable Connection 1 and choose <USB> as Host. On your copputer, make sure "Allow USB connections" is on in Bridge.


### To add the mappings to Mixxx:

Throw `TouchOSC.midi.xml` and `Grufkork-TouchOSC-scripts.js` into `AppData/Local/Mixxx/controllers`. Then open Mixxx, go to the settings > controllers > TouchOSC Bridge. Under "Load Mapping", choose `TouchOSC`. Apply, and you should be ready to go!

### Layout
I have only added what I regularly use, but it should be more than plenty to mix some choons!
![Layout](https://github.com/grufkork/touchosc-dj/blob/main/layout.png?raw=true)

#### Shift functions
Holding shift alters the function of some buttons:

- Holding shift and pressing a hotcue removes it.
- While shift is held, the gradual tempo reset button will make the tempo return 3x faster than usual. Useful for drastic tempo transitions.

## Etcetera

TouchOSC costs on mobile but is free on desktop, so you can design layouts on your PC and then copy them over to your mobile device.

The architecture is all over the place. Most of the intelligence is in TouchOSC, but I just just put it where it was most convenient. The encoders don't work as jogs out of the box as you need some trickery to get a delta value out of them.
