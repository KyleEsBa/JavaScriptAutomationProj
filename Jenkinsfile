pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-2'
        AWS_ACCOUNT_ID = '679029767226'
        ECR_REPO = 'playwright_automation_repo'
        IMAGE_TAG = 'latest'
        IMAGE_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${IMAGE_TAG}"
        NPM_CONFIG_CACHE="/tmp/.npm-cache"
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
                sh "docker pull ${IMAGE_URI}"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build --no-cache -t ${IMAGE_URI} ."
            }
        }

        stage('Push to ECR') {
            steps {
                sh "docker push ${IMAGE_URI}"
            }
        }
        stage('Run Playwright Tests') {
            steps {
                script {
                        try {
                            // Run container with no volume mounts, so it uses only internal image files
                            sh """
                              docker run --rm -u root ${IMAGE_URI} npx playwright test
                            """
                        } catch (err) {
                            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
                            currentBuild.result = 'FAILURE'
                            error("Playwright tests failed. Aborting pipeline.")
                        }
                    }
              }
        }
    }
    options {
        buildDiscarder(logRotator(numToKeepStr: '4'))
    }
}
