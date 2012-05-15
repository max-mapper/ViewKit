## work in progress, not usable yet

ViewKit is a fork of UIKit designed for mobile WebKit WebViews. Initially designed for iOS5, it may be ported to other WebKits/mobile browsers in the future

Relies on browserified node libraries such as EventEmitter

generate `lib/browserify/bundle.js` with `browserify -r util -r events -o lib/browserify/bundle.js`

compile `build/` with `make`