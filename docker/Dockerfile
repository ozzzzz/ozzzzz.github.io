FROM ruby:3.1.3

WORKDIR /opt/app

# COPY _pages _pages
# COPY _sass _sass
# COPY assets assets

# COPY index.html resume_cv.md ./

COPY _config.yml Gemfile ./

RUN bundle config set --local path 'vendor/bundle'
RUN bundle add webrick
RUN bundle install

COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]