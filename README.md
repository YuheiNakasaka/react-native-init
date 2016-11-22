# react native init

This is a simple boilderplate to start development of react native.

- redux
- react-native-router-flux
- base directories and files of redux
- adding some best practices

```
./project_name
  |── __tests__
  |── android/
  |── index.android.js
  |── ios/
  |── node_modules/
  |── package.json
  |── index.ios.js
  |── src
    ├── App.js
    ├── Root.js
    ├── Scenes.js
    ├── actions
    │   └── sampleAction.js
    ├── assets
    │   ├── images
    │   └── styles
    ├── components
    │   └── SampleHome.js
    ├── constants
    ├── containers
    │   └── SampleHome.js
    ├── reducers
    │   ├── index.js
    │   └── sampleReducer.js
    ├── store
    │   └── configureStore.js
    └── utils
        └── AppStyles.js
```

# Requirements

- node
- watchman
- react-native-cli

Read [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html).

# Example

1) clone repo

```
git clone https://github.com/YuheiNakasaka/react-native-init
```
2) define setup.sh to the $PATH


```
ln -s ./setup /usr/local/bin/rn-init
```

3) make a directory for new project

```
mkdir new-project
```

4) run the script

```
rn-init
```
