# Process Monitoring
There are 3 process monitoring scripts for [PM2](http://pm2.keymetrics.io/) designed to help you create, update, and stop the running Node.js process on a production machine.


## Start the Server
This script can start a single instance or cluster of servers for load-balancing and increased redundancy. Having more than one process allows for graceful reloading where your server would normally go down temporarily.

> _**NOTE:** Once the server is running, even if you do updates, you won't need to run this script again._

Start a single server:

```shell
bash server.sh 1
```

Start a server cluster equal to the number of processor cores:

```shell
bash server.sh
```

The default is `0`: equal to the number of CPU cores. The number `1` can be replaced with any other number for increased redundancy and load balancing, even more than the number of processor cores.


## Update from Git and Restart
Update the current branch with the latest changes. Then build the app, and run it.

```shell
bash update.sh
```

If you make an update to the `update.sh` file via Git, make sure to run `git pull` prior to running the update script.


## Stop the Server
Stop and delete the running Node.js processes from PM2. This is helpful if you need to do maintenance, change a configuration option, or change the cluster size.

```shell
bash stopServer.sh
```
