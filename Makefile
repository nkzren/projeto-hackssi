.PHONY: help start stop clean setup

help:
	@echo -e "PAND Front End - \x1b[1;4;33mMakefile\x1b[m"
	@echo
	@echo -e "If this is your first time running the application, make sure to read the \x1b[1;4;33mREADME.md\x1b[m for better instructions"
	@echo "Choose one of the following options:"
	@echo -e "- \x1b[1;4mstart\x1b[m starts the container"
	@echo -e "- \x1b[1;4mstop\x1b[m  stops the running containers"
	@echo -e "- \x1b[1;4mclean\x1b[m cleans the docker environment"
	@echo -e "- \x1b[1;4msetup\x1b[m configures the \x1b[1mdocker-compose\x1b[m environment for the first time"

start:
	@docker-compose up -d
	@docker-compose exec app bash

stop:
	@docker-compose down

clean:
	@docker-compose stop
	@docker-compose rm -f

setup:
	@echo "Creating network 'development'..."
	@docker network create --gateway 172.28.0.1 --subnet 172.28.0.0/16 development 2>/dev/null; true
	@mkdir -p dist/
