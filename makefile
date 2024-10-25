run:
	bun index.ts

watch:
	bun --watch index.ts

bun-build:
	bun build index.ts

# Docker commands
build-docker:
	docker build -t bun-api-server .

run-docker:
  docker run -p 8080:8080 bun-api-server
