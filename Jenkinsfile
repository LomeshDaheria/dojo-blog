pipeline{
    agent none
    stages {
        stage("Cloning Repo") {
            agent {
                docker {
                    image "socat:alpine"
                }
            }
            steps {
                echo "Repo cloning taking place"
            }
        }
        stage("Build") {
            agent {
                docker {
                    image "ubuntu:latest"
                }
            }
            steps {
                echo "Java project being built here"
            }
        }
        stage("Test") {
            agent {
                docker {
                    image "centos"
                }
            }
            steps {
                echo "Test being performed on the built artifact"
            }
        }
        stage("Deploy") {
            agent {
                docker {
                    image "node:latest"
                }
            }
            steps {
                echo "Artifact being deployed here"
            }
        }
    }
}
