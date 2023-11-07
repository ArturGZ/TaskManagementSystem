FROM nginx:1.25.2-alpine3.18-slim

COPY out /usr/share/nginx/html
COPY container/nginx.conf /etc/nginx/conf.d/default.conf

RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
RUN apk add --update curl && rm -rf /var/cache/apk/*
RUN mkdir /usr/share/nginx/html/server/app/_next
RUN cp -r /usr/share/nginx/html/static /usr/share/nginx/html/server/app/_next

USER nginx

EXPOSE 8080

HEALTHCHECK --interval=5s --timeout=3s \
    CMD curl -f http://localhost:8080

CMD ["nginx", "-g", "daemon off;"]