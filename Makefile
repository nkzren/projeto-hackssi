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
	@docker network create --gateway 172.28.0.0/16 development 2>/dev/null; true
	@mkdir -p dist/