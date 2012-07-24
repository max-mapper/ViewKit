COMPONENTS = container \
	navbar \
	topnav \
	bottomnav \
	button \
	actionbutton \
	navbutton \
	scrollarea \
	list \
	item
  
all:
	@rm -fr build
	@mkdir build
	@cat lib/browserify/bundle.js > build/vk.js
	@cat lib/prelude.js >> build/vk.js
	@./support/build.js $(COMPONENTS)
	@cp lib/sprite-dist/* build/
	@cat build/sprite.css >> build/vk.css
	@rm build/sprite.css
