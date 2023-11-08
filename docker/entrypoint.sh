#!/bin/bash

cd /opt/app
bundle add webrick
bundle exec jekyll serve --host 0.0.0.0 --force_polling
