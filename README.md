# ozzzzz.github.io

## Local setup in Docker

To run locally in Docker:

```bash
docker-compose -f docker-compose-local.yaml up -d
```

To turn off:

```bash
docker-compose -f docker-compose-local.yaml stop
```

To delete containers:

```bash
docker-compose -f docker-compose-local.yaml rm -f
```