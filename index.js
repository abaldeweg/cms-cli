#!/usr/bin/env node

const cli = require('cac')()
const { dev, build } = require('@vuepress/core')
const path = require('path')

cli
  .command('dev', 'Start the development environment.')
  .action(() => {
    dev({
      sourceDir: path.resolve('content'),
      theme: '@baldeweg/vuepress-theme-cms',
      host: 'localhost',
      open: true,
      clearScreen: true
    })
  })

cli
  .command('build', 'Build the app.')
  .action(() => {
    build({
      sourceDir: path.resolve('content'),
      theme: '@baldeweg/vuepress-theme-cms',
      dest: 'dist',
      clearScreen: true
    })
  })


cli.help()
cli.parse()
