pipeline {
    agent any;

    stages {
        stage('Test') {
            steps {
                sh """
                npm i 
                npx ava --tap | tee result.txt
                cat result.txt | npx ts-node
                """
            }
        }
    }
}
