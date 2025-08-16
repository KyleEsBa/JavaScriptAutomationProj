pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-2'
        AWS_ACCOUNT_ID = '679029767226'
        ECR_REPO = 'playwright_automation_repo'
        IMAGE_TAG = 'latest'
        IMAGE_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${IMAGE_TAG}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/KyleEsBa/JavaScriptAutomationProj.git'
            }
        }

        stage('Login to ECR') {
            steps {
                sh "aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_URI} ."
            }
        }

        stage('Push to ECR') {
            steps {
                sh "docker push ${IMAGE_URI}"
            }
        }
    }
    options {
        buildDiscarder(logRotator(numToKeepStr: '4'))
      }
}
