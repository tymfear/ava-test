pipeline {
    agent any;

    stages {
        stage('Test') {
            steps {
                sh """
                npm i 
                npx ava --tap | tee result.tap
                cat result.tap | npx ts-node tap.ts
                """
            }
        }
        stage('TAP publish') {
            steps {
                step([$class: "TapPublisher", testResults: "result.tap"])
            }
        }
    }
}
