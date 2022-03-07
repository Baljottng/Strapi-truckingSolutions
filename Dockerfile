# FROM node:14

# WORKDIR /app
# ADD ./package.json /app
# ADD ./yarn.lock /app
# RUN yarn install --frozen-lockfile

# ADD . /app
# RUN yarn build

# EXPOSE 1338

# CMD ["yarn", "develop"]
FROM node:14
# Installing libvips-dev for sharp compatability
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./
COPY ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g
RUN yarn install
WORKDIR /opt/app
COPY ./ .
RUN yarn build
EXPOSE 1337
CMD ["yarn", "develop"]
