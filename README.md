# Local Mail Server

## Project Description
This project provides a local mail server solution using Docker and Docker Compose, allowing users to set up a mail server for development and testing purposes.

## Features
- Easy to set up with Docker Compose
- Supports sending and receiving emails locally
- Configurable to meet various needs
- Ideal for testing email functionalities in applications

## Installation Instructions
1. Ensure you have Docker and Docker Compose installed on your system.
2. Clone this repository:
   ```bash
   git clone https://github.com/pilesosvalera/Local_mail.git
   cd Local_mail
   ```
3. Build the Docker images:
   ```bash
   docker-compose build
   ```

## How to Run with Docker-Compose
1. Start the mail server:
   ```bash
   docker-compose up -d
   ```
2. Access the web interface to manage emails if applicable.
3. Send and receive emails using your local setup.

## Notes
- Make sure to configure your mail settings in the `docker-compose.yml` file as needed.
- Check the logs for any errors or useful information:
   ```bash
   docker-compose logs -f
   ```

---