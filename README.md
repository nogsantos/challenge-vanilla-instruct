# Instruct - Challenge

Fabricio Nogueira - [fabricionogueira.me](https://fabricionogueira.me)

Requirements

<table>
    <tbody>
        <tr>
            <th>Tool</th>
            <th>Min. Version</th>
        </tr>
        <tr>
            <td>Node</td>
            <td>>= 6.x</td>
        </tr>
        <tr>
            <td>NPM</td>
            <td>>= 5.6</td>
        </tr>
    </tbody>
</table>

Build dependencies

<table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Version</th>
        </tr>
        <tr>
            <td>Gulp</td>
            <td>3.x</td>
        </tr>
        <tr>
            <td>Webpack</td>
            <td>4.x</td>
        </tr>
        <tr>
            <td>Babel</td>
            <td>6.x</td>
        </tr>
    </tbody>
</table>

## Setup

Install project dependencies

```bash
$ npm i
```

Run development environment. The project will be available on `http://localhost:8080`, when a file changes, the dev build will recompiles again. Just refresh the page.

```bash
$ npm run build:dev
```

Run dist. The distribute files will be generated minified on `dist` dir.

```bash
$ npm run build:dist
```
