<div align="center">
  <img width="150" height="150" src="https://newrelic.com/assets/pages/golang/go-mascot.svg">
  <a href="https://facebook.github.io/jest/">
	<img width="150" height="150" vspace="" hspace="25" src="https://cdn.worldvectorlogo.com/logos/jest.svg">
  </a>
  <h1>Gojest</h1>
  <p>A standalone binary to run Go tests using the Jest platform</p>
  <a href="https://asciinema.org/a/OQ8MQDGYNiQ2aqUECvGk061ZD">https://asciinema.org/a/OQ8MQDGYNiQ2aqUECvGk061ZD</a>
</div>

## Usage

### Install

If you want to get the latest version of Gojest you can either download the binaries from the project page or install them using Docker by running the following:

For macOS:
```bash
docker pull maximeheckel/gojest:latest &&
id=$(docker create maximeheckel/gojest:latest) &&
docker cp $id:/gojest-macos /usr/local/bin/gojest && (docker rm $id >/dev/null)
```

For Linux:
```bash
docker pull maximeheckel/gojest:latest &&
id=$(docker create maximeheckel/gojest:latest) &&
docker cp $id:/gojest-linux /usr/local/bin/gojest && (docker rm $id >/dev/null)
```

```bash
For Windows
docker pull maximeheckel/gojest:latest &&
id=$(docker create maximeheckel/gojest:latest) &&
docker cp $id:/gojest-win.exe gojest.exe && (docker rm $id >/dev/null)
```
### Contribute

1. `git pull git@github.com:MaximeHeckel/gojest.git` (preferably in your GOPATH if you want to run the examples on your machine)
2. Run `npm install` or `yarn` to install the dependencies of the project
3. To run use: `node index.js`
4. To Build the project run: `yarn build`