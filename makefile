run:
	bun index.ts

watch:
	bun --watch index.ts

bun-build:
	bun build index.ts

build-docker:
	docker build -t bun-api-server .

run-docker:
	docker run -p 3000:3000 bun-api-server
