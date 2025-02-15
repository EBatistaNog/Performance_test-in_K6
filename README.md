# Performance Testing Project with k6

## Overview
This project demonstrates how to perform load testing using k6, focusing on simulating different traffic patterns for a user registration API.

## Configuration
The tests are configured to fail if more than 1% of the HTTP requests fail or if more than 90% of the requests take longer than 7 seconds to complete.

## Running the Test

### 1. Install k6
Make sure k6 is installed on your system. If it is not installed, follow the instructions available at [k6.io](https://k6.io) to install it.

### 2. Prepare the Script
Save your test script as `k6_POC.js` on your machine.

### 3. Open the Terminal
Open your terminal and navigate to the directory where `k6_POC.js` is saved.

### 4. Run the Test
Execute the test with the following command:

### 5. k6 Web Dashboard
To enable the k6 web dashboard and view the results in real time, run the command:
Then, open your browser and navigate to [http://localhost:5665/](http://localhost:5665/) to view the dashboard.
