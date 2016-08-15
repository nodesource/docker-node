.SILENT:
help:
	echo
	echo "NodeSource Docker Node.js Make commands"
	echo
	echo "  Commands: "
	echo
	echo "    help  - Show this message"
	echo "    build - Build and test the NodeSource Docker images and the push to the Registry"
	echo "    deps  - List the dependencies of this repo and check if they are installed"

install:
	npm install

build: install
	./tools/build.sh

deps:
	echo "  Dependencies: "
	echo
	echo "    * docker $(shell which docker > /dev/null || echo '- \033[31mNOT INSTALLED\033[37m')"
	echo "    * dante $(shell which dante > /dev/null || echo '- \033[31mNOT INSTALLED\033[37m')"
	echo "    * node $(shell which node > /dev/null || echo '- \033[31mNOT INSTALLED\033[37m')"
	echo "    * npm $(shell which npm > /dev/null || echo '- \033[31mNOT INSTALLED\033[37m')"
