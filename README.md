<h1 align="center">
MATERIAL DASHBOARD
</h1>

<div align="center">

Material Dashboard is an Angular admin template made with Material components.

[![npm](https://img.shields.io/npm/v/ng-matero.svg)](https://www.npmjs.com/package/ng-matero)
[![GitHub Release Date](https://img.shields.io/github/release-date/ng-matero/ng-matero)](https://github.com/ng-matero/ng-matero/releases)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ng-matero/ng-matero/blob/master/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/ng-matero/ng-matero.svg)](https://gitter.im/matero-io/ng-matero)
[![docs](https://img.shields.io/badge/docs-gitbook-red)](https://nzbin.gitbook.io/ng-matero/)
[![Material Extensions](https://img.shields.io/badge/material-extensions-blue)](https://github.com/ng-matero/extensions#readme)
[![Financial Contributors on Open Collective](https://opencollective.com/ng-matero/all/badge.svg?label=financial+contributors)](https://opencollective.com/ng-matero)

</div>

## ✨ Features

- Material Extensions
- Schematics support
- Modern design style
- Multiple admin layout
- Powerful color system
- Rich CSS helpers
- Dark mode support
- RTL support
- Internationalization
- Authentication
- HTTP interceptors
- Permissions management
- 
## 🔧 Installation

The project has support `ng add` yet.

```bash
$ ng new <project-name>
$ cd <project-name>
$ ng add ng-matero
```

You can also git clone the starter repo to start. But it's not recommended.

```bash
$ git clone --depth=1 git@github.com:ng-matero/starter.git <project-name>
$ cd <project-name>
$ npm install
```

## ⚙️ Schematics

You can use the ng-matero schematics to generate a module or a page.

### Module schematic

Generate a lazy loaded module.

```bash
$ ng g ng-matero:module <module-name>
```

The new module will be created in `routes` folder, it will be added in `routes.module` and its route declaration will be added in `routes-routing.module` automaticly.

### Page schematic

Generate a page component in the module.

```bash
$ ng g ng-matero:page <page-name> -m=<module-name>
```

Generate a entry component in the page component.

```bash
$ ng g ng-matero:page <page-name>/<entry-component-name> -m=<module-name> -e=true
```

### Example

Just two steps after initializing the project, you can get a route page.

```bash
$ ng g ng-matero:module abc
$ ng g ng-matero:page def -m=abc
```

Take a look at `http://localhost:4200/#/abc/def`, enjoy it!

## 💻 Development

```bash
$ git clone git@github.com:ng-matero/ng-matero.git
$ cd ng-matero
$ npm install
$ npm run hmr
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 📃 License

MIT
