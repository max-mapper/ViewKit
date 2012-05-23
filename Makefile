COMPONENTS = container \
	navbar \
	topnav \
	bottomnav \
	button \
	actionbutton \
	navbutton \
	scrollarea
  
all:
	@rm -fr build
	@mkdir build
	@cat lib/browserify/bundle.js > build/vk.js
	@cat lib/prelude.js >> build/vk.js
	@./support/build.js $(COMPONENTS)