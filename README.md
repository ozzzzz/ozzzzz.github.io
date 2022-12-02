# ozzzzz.github.io

## Local setup in Docker

### Install and run

Build image:

```
docker build -t ozzzzz-site -f docker/Dockerfile .
```

Run with detached:

```
docker run -d -p 4000:4000 --name ozzzzz-site ozzzzz-site
```

Or run with attached and remove after stop:

```
docker run --rm -it -p 4000:4000 --name ozzzzz-site ozzzzz-site
```

### Stop and remove

```
docker rm -f ozzzzz-site
docker rmi ozzzzz-site
```
