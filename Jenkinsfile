pipeline {
    agent any

    stages {
        stage('CI') {
            steps {
                git 'https://github.com/MMamdouh996/lexalyzer'
                withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh """
                docker login -u ${USERNAME} -p ${PASSWORD}
                docker build . -t mohamedmamdouhiv/lexalyzer:v1.1 --network host
                docker push mohamedmamdouhiv/lexalyzer:v1.1
                """
                }
            }
        }
         stage('CD') {
            steps {
                git 'https://github.com/MMamdouh996/lexalyzer'
                withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh """
                kubectl apply -f /var/jenkins_home/workspace/test/app/app.yaml
                kubectl apply -f /var/jenkins_home/workspace/test/app/service-app.yaml
                """
                }
            }
        }
    }
}
