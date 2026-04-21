# Wellwork Germany static site — served by nginx
FROM nginx:1.27-alpine

# Copy site into nginx's default web root
COPY . /usr/share/nginx/html

# Drop dev-only files from the image
RUN rm -f /usr/share/nginx/html/Dockerfile \
          /usr/share/nginx/html/.dockerignore \
          /usr/share/nginx/html/.gitignore \
          /usr/share/nginx/html/README.md \
 && rm -rf /usr/share/nginx/html/.git

# Nginx config: listen on Railway's $PORT at runtime, fall back to 80 locally.
# We template the default.conf so Railway's injected PORT is honoured.
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# nginx:alpine image has an entrypoint that substitutes env vars in
# /etc/nginx/templates/*.template and writes them to /etc/nginx/conf.d/
ENV PORT=80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
