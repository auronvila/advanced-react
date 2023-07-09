FROM ubuntu:latest
LABEL authors="auron"

ENTRYPOINT ["top", "-b"]