## Project Title: 22squared agency static website
* Dev Lead: Richard Tuttle
- Client: 22Squared

## Initial Development Environment Setup
At least LTS version of Node. (currently 16.13.x)

```bash
# install dependencies
$ yarn global add prismic-cli
$ yarn install

# connect to prismic repo
$ npx @slicemachine/init
```
### launch Visual Builder and Localhost environments in seperate terminal windows
```bash
$ yarn run dev
$ yarn run slicemachine
```
## Enviroments

| enviroment | URL                               |
| ---------- | --------------------------------- |
| DEV        |                                   |
| STAGE      |                                   |
| PROD       | https://22squared.com             |
| Prismic    | https://22sq.prismic.io/          |
## Development environment utilizes:

- Vue
- Nuxt
- Node
- Sass
- Fontawesome
- TailWind
- Prismic

## Documentation
- [Wireframes](https://www.figma.com/proto/jZTTWbhyxblcXwZJr1vund/22squared-website-ux-2021?page-i%5B%E2%80%A6%5D264=&node-id=19%3A848&viewport=241%2C48%2C0.13&scaling=min-zoom)
