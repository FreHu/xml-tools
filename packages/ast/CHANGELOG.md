# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.1](https://github.com/sap/xml-tools/compare/@xml-tools/ast@2.0.0...@xml-tools/ast@2.0.1) (2020-01-28)

**Note:** Version bump only for package @xml-tools/ast

# [2.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/ast@1.0.0...@xml-tools/ast@2.0.0) (2020-01-20)

### Features

- **parser:** support Basic DocType Declarations ([5b4db21](https://github.com/sap/xml-tools/commit/5b4db21))

### BREAKING CHANGES

- **parser:** Implementing XmlCstVisitor now requires implementing two additional methods:
  (docTypeDecl and externalID)

# [1.0.0](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.5.0...@xml-tools/ast@1.0.0) (2019-12-08)

### Features

- **ast:** attributesRange and guessedAttributeRange support ([8ce840d](https://github.com/sap/xml-tools/commit/8ce840d)), closes [#51](https://github.com/sap/xml-tools/issues/51)

### BREAKING CHANGES

- **ast:** buildAst now requires a tokenVector argument

# [0.5.0](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.6...@xml-tools/ast@0.5.0) (2019-12-05)

### Features

- better Handling of Open/Close Body ranges ([0751a7e](https://github.com/sap/xml-tools/commit/0751a7e))

## [0.4.6](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.5...@xml-tools/ast@0.4.6) (2019-12-03)

**Note:** Version bump only for package @xml-tools/ast

## [0.4.5](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.4...@xml-tools/ast@0.4.5) (2019-11-20)

**Note:** Version bump only for package @xml-tools/ast

## [0.4.4](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.3...@xml-tools/ast@0.4.4) (2019-11-12)

**Note:** Version bump only for package @xml-tools/ast

## [0.4.3](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.2...@xml-tools/ast@0.4.3) (2019-11-11)

**Note:** Version bump only for package @xml-tools/ast

## [0.4.2](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.1...@xml-tools/ast@0.4.2) (2019-11-11)

**Note:** Version bump only for package @xml-tools/ast

## [0.4.1](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.4.0...@xml-tools/ast@0.4.1) (2019-11-06)

### Bug Fixes

- new property added to ast interface ([#35](https://github.com/sap/xml-tools/issues/35)) ([d7fd672](https://github.com/sap/xml-tools/commit/d7fd672))

# [0.4.0](https://github.com/sap/xml-tools/compare/@xml-tools/ast@0.3.0...@xml-tools/ast@0.4.0) (2019-11-06)

### Features

- open tag body range added ([#34](https://github.com/sap/xml-tools/issues/34)) ([5414111](https://github.com/sap/xml-tools/commit/5414111))

# 0.3.0 (2019-10-28)

### Features

- move to lerna independent mode ([6c347a8](https://github.com/sap/xml-tools/commit/6c347a8)), closes [#18](https://github.com/sap/xml-tools/issues/18)

# 0.2.0 (2019-10-28)

# 0.1.0 (2019-10-28)
