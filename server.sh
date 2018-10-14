#/bin/bash
cd $( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

numberOfServers=$1

if [[ ! $numberOfServers ]]; then
	numberOfServers=0
fi

pm2 start app.js -i $numberOfServers --name ${PWD##*/} -- server
