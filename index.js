#!/usr/bin/env node

const cli = require('cac')()
const { dev, build } = require('@vuepress/core')
const path = require('path')

const options = {
  sourceDir: path.resolve('content'),
  theme: '@baldeweg/vuepress-theme-cms',
  clearScreen: true,
}

cli
  .command('dev', 'Start the development environment.')
  .action(() => {
    dev({
      ...options,
      host: 'localhost',
      open: true,
    })
  })

cli
  .command('build', 'Build the app.')
  .action(() => {
    build({
    ...options,
      dest: 'dist',
    })
  })


cli.help()
cli.parse()
