FROM public.ecr.aws/bitnami/node:latest as build-stage

RUN mkdir /usr/share/nginx
RUN mkdir /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
COPY package*.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run build

COPY nginx.conf /etc/nginx/nginx.conf

FROM public.ecr.aws/runecast/nginx:1.21.1-alpine
COPY --from=build-stage /usr/share/nginx/html/dist /usr/share/nginx/html
COPY --from=build-stage /etc/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80