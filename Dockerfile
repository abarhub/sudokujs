FROM httpd:2.4-alpine

RUN rm -r /usr/local/apache2/htdocs/*

COPY ./docs/sudokujs/ /usr/local/apache2/htdocs/

RUN chown -R root:daemon /usr/local/apache2/htdocs/*

RUN chmod -R 440 /usr/local/apache2/htdocs/*

RUN apk --no-cache add curl

HEALTHCHECK --interval=5s --timeout=3s CMD curl --fail http://localhost:80/ || exit 1
