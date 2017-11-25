FROM node:8-alpine

COPY package.json yarn.lock index.js /gojest/

WORKDIR /gojest

RUN yarn --ignore-scripts && \
	yarn build

FROM alpine:3.6

RUN apk --no-cache add ca-certificates

COPY --from=0 /gojest/gojest-linux /gojest-linux
COPY --from=0 /gojest/gojest-macos /gojest-macos
COPY --from=0 /gojest/gojest-win.exe /gojest-win.exe