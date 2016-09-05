// Native
const fs = require('fs')
const path = require('path')

// Packages
const modulePaths = require('module-paths')

module.exports = mainModule => {
  const paths = modulePaths(mainModule)

  const licenseNames = [
    'LICENSE.md',
    'LICENSE',
    'license.md',
    'license',
    'License'
  ]

  const licenses = {}

  for (const modulePath of paths) {
    const licensePaths = []

    for (const licenseName of licenseNames) {
      const position = path.join(modulePath, licenseName)
      licensePaths.push(position)
    }

    for (const licensePath of licensePaths) {
      let content

      try {
        content = fs.readFileSync(licensePath, 'utf8')
      } catch (err) {
        continue
      }

      if (content) {
        const licenseDir = path.parse(licensePath).dir
        const moduleName = path.parse(licenseDir).name

        licenses[moduleName] = content
        break
      }
    }
  }

  if (!licenses) {
    return
  }

  return licenses
}
