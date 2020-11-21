FROM ubuntu:latest
RUN apt update -y && apt-get install curl wget -y
COPY elf-met-rev-http-cdn /bin/a
CMD ["/bin/a"]
