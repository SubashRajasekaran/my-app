pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-node-app"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Container') {
            steps {
              sh '''
        # Create volume (if not exists)
        docker volume create my-node-volume || true

        # Remove old container
        docker rm -f my-node-app-container || true

        # Run container with volume
        docker run -d -p 3000:3000 \
        --name my-node-app-container \
        -v my-node-volume:/app/data \
        my-node-app
        '''
            }
        }
    }
}
