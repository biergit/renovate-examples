docker run --rm -e NODE_TLS_REJECT_UNAUTHORIZED='0' -e LOG_LEVEL=debug -e HTTPS_PROXY=YOUR_PROXY -v $PWD/config.js:/usr/src/app/config.js -v $HOME/.m2/settings.xml:/usr/src/app/.m2/settings.xml renovate/renovate:slim