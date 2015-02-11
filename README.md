# pmonit

pmonit is a real-time project monitor for Jenkins.

## Set-up

### Step 1

#### Mac OS X and Windows
Install boot2docker https://docs.docker.com/installation/mac/

#### Linux
Install Docker http://www.docker.com

### Step 2
Clone the repository, and from the project root, issue the following from a command prompt (build the container):
```
docker build -t <docker container name> .
```
### Step 3
Run the container by issuing the following from a command prompt:
```
docker run -p 5001:5001 -d <docker container name>
```
### Step 4
Check to make sure that the container is running, and issue the following from a command prompt:
```
docker ps
```
You should see the name you've given to your Docker container in the list.
If you see the container name, then you should be able to display and configure the monitor from: http://localhost:5001