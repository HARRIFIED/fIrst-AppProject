# fIrst-AppProject
first react-native project
setting development environemnt for react-native is not fun tho especially for begineers.

{i followed the docs}
error encounted 
1. java_home 'java' command not found in path
2. metro error {ailed to construct transformer: Error: error:0308010C:digital envelope}
3. SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable

steps i recommend to be taken
1. I used node 14.18.1 {the latest version of node gives the metro error}
2. dont install globally {npx react-native init <projectName>}
3. i installed JDK and i opened the typed edit the system variable environment and copy the path in my environment
4. https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil
use this link for the sdk error
5. To debug your appliation you should use emulator{which was not fruitful}, so i used my device
6. go to android studio, then to SDK manager, then to SDK tools then download google USB.
7. run app 


{maybe thats all} all future errors and correction comes here}

To run app
open two separate terminals 
in one run the command  npx react-native start => this will start metro terminal
in the order run npx react-native run-android or npx react-native run-android
