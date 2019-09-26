# rapi-schematics
Angular schematics to skip the boilerplate code

## Installation

```sh
npm install @dploy-team/rapi-schematics@latest --save-dev
```

> Make sure your npm registry is setted to github package

## Usage

### Store

Creates:
- The APIService extended from [@dploy-team/rapi-w3](https://github.com/dploy-team/rapi-w3) W3AbstractRequestService
- Basic Crud Redux Actions
- Basic Crud Redux Effects
- Basic Entities Selectors
- Basic Crud Redux reducers
- FeatureStoreModule

```sh 
   ng g @dploy-team/rapi-schematics:store myFeature --pluralName 
```

> If not pass `pluraName` parameter, a 's' will be concatenated to the feature name
