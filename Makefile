check: fix test
check-without-e2e: fix test-unit
test: test-unit test-e2e

dev:
	cd app && npm run serve

build:
	cd app && npm run build

test-unit:
	cd app && npm run test:unit

test-unit-watch:
	cd app && npm run test:unit:watch

test-e2e:
	cd app && npm run test:e2e

fix:
	cd app && npm run check
