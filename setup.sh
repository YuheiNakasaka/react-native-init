#!/bin/sh

# check parameters
project_name=$1

if [ -z $project_name ]
then
  echo "Input project name!"
fi

# create project
echo "Creating react native project"
react-native init $project_name
cd $project_name

# install base npm module
echo "Installing related npm modules"
npm i react-native-router-flux --save
npm i redux --save
npm i react-redux --save
npm i redux-logger --save
npm i redux-thunk --save

# create app directories
# echo "Making directories inspired from redux and some best practices"
current_directory=`pwd`
app_dir="${current_directory}/src"

actions_dir="${app_dir}/actions"
components_dir="${app_dir}/components"
containers_dir="${app_dir}/containers"
reducers_dir="${app_dir}/reducers"
store_dir="${app_dir}/store"
constants_dir="${app_dir}/constants"
utils_dir="${app_dir}/utils"
assets_dir="${app_dir}/assets"

mkdir $app_dir
mkdir $actions_dir
mkdir $components_dir
mkdir $containers_dir
mkdir $reducers_dir
mkdir $store_dir
mkdir $constants_dir
mkdir $utils_dir
mkdir $assets_dir
mkdir "${assets_dir}/images"
mkdir "${assets_dir}/styles"

# create related files
cwd="$(dirname "$(readlink "$0")")"

cp "${cwd}/App.js" $app_dir
cp "${cwd}/Root.js" $app_dir
cp "${cwd}/Scenes.js" $app_dir
cp "${cwd}/reducers/index.js" $reducers_dir
cp "${cwd}/store/configureStore.js" $store_dir
cp "${cwd}/utils/AppStyles.js" $utils_dir
cp "${cwd}/reducers/sampleReducer.js" $reducers_dir
cp "${cwd}/actions/sampleAction.js" $actions_dir
cp "${cwd}/containers/SampleHome.js" $containers_dir
cp "${cwd}/components/SampleHome.js" $components_dir

echo "Finished setting up!\nNext rewrite index.(ios|android).js to bind Root to AppRegistry.registerComponent and try react-native run-ios"





