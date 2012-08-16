COMPONENTS = container \
	navbar \
	topnav \
	bottomnav \
	button \
	actionbutton \
	navbutton \
	list \
	item

all: sprite enhancespritecss browserify package

sprite:
	@glue lib/sprite lib/sprite-dist --retina --algorithm=vertical --namespace=""

enhancespritecss:
	@sed -i "" "s/-active/:active/g" lib/sprite-dist/sprite.css

browserify:
	@browserify -r util -r events -r stream -r mustache -r underscore -r masseuse -o lib/browserify/bundle.js

package:
	@rm -fr build
	@mkdir build
	@cat lib/browserify/bundle.js > build/vk.js
	@cat lib/prelude.js >> build/vk.js
	@./support/build.js $(COMPONENTS)
	@cp lib/sprite-dist/* build/
