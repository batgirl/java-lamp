#!/bin/bash
# docker cp public/javascripts/sample.js b72a67aaad9d:/tmp.js
# docker commit b72a67aaad9d
# docker run b3810f0d8fc2 node /tmp.js

# docker build -t kevgary/app-testing .
# $(pwd)
# OUTPUT=$(docker run --read-only --rm -v `pwd`/public/javascripts:/data:ro kevgary/app-testing node sample.js)

# if [ $? -ne 0 ]
#   then
#     echo error found
#   else 
#     echo $OUTPUT
# fi