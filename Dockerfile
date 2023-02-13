FROM node:lts-alpine AS base

ARG BUILD_VERSION="latest"
ARG NPM_TOKEN=${NPM_TOKEN}

WORKDIR /service

COPY package.json ./package.json
COPY yarn.lock ./yarn.lock

FROM base AS packages

ARG BUILD_VERSION="latest"
ARG NPM_TOKEN=${NPM_TOKEN}

WORKDIR /service

RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> .npmrc && \
 yarn install --pure-lockfile && \
     rm .npmrc

COPY . .

RUN yarn run front:build

RUN sed -i -- "s/__VERSION__/${BUILD_VERSION}/" server/lib/version.js
RUN sed -i -- "s/__DATE__/$(date)/" server/lib/version.js

ENTRYPOINT ["yarn", "server:prod"]

FROM base AS production

ARG BUILD_VERSION="latest"
ARG NPM_TOKEN=${NPM_TOKEN}

WORKDIR /service

RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> .npmrc && \
 yarn install --production && \
     rm .npmrc

RUN mkdir uploads

# source code
COPY --from=packages /service/dist ./dist
COPY --from=packages /service/server ./server
COPY --from=packages /service/public ./public
COPY --from=packages /service/refs ./refs
COPY --from=packages /service/_forms ./_forms
COPY --from=packages /service/params ./params

COPY --from=packages /service/envVars.yml ./envVars.yml

COPY --from=packages /service/cli ./cli
RUN chmod 744 cli/cli.js

COPY --from=packages /service/persisted-queries.json ./persisted-queries.json
COPY --from=packages /service/.babelrcprod ./.babelrc

CMD ["yarn", "server:prod"]
