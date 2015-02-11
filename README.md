project-monitor
===============

<h2>Real-time project monitor for Jenkins.</h2>

<h3>Set-up</h3>
<h4>Step 1</h4>
<p>Mac OS X and Windows</p>
<p>Install boot2docker https://docs.docker.com/installation/mac/</p>
</br>
<p>Linux</p>
<p>Install Docker http://www.docker.com</p>
<h4>Step 2</h4>
<p>Clone the repository, and from the project root issue the following from a command prompt to build the container:</p>
<p>docker build -t <docker container name> .</p>
<h4>Step 3</h4>
<p>Run the container by issuing the following from a command prompt: docker run  -p 5001:5001 -d <docker container name></p>
<h4>Step 4</h4>
<p>Check to make sure that the container is running by issuing the following from a command prompt: docker ps</p>
<p>You should see the name you've given to your Docker container in the list.</p>
<p>If you see the container name then go to: http://localhost:5001</p>