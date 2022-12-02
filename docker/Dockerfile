FROM ruby:3.1.3

WORKDIR /opt/app

COPY assets assets
COPY _sass _sass
COPY _includes _includes
COPY index.html resume_cv.md ./

COPY _config.yml Gemfile Gemfile.lock ./

RUN bundle config set --local path 'vendor/bundle'
RUN bundle add webrick
RUN bundle install

COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]