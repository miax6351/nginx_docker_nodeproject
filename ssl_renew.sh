#!/bin/bash

COMPOSE="/usr/local/bin/docker-compose --no-ansi"
DOCKER="/usr/bin/docker"

cd /home/s205353/node_project/
$COMPOSE run certbot renew --dry-run && $COMPOSE kill -s SIGHUP webserver
$DOCKER system prune -af
