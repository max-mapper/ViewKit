COMPONENTS = nav
  
all:
	@rm -fr build
	@mkdir build
	@cat lib/browserify/bundle.js > build/vk.js
	@cat lib/components/prelude.js >> build/vk.js
	@./support/build.js $(COMPONENTS)

watch:
	watch --interval=1 $(MAKE)