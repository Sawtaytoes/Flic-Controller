#/bin/bash
cd $( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

pm2 delete ${PWD##*/}
