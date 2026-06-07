pipeline {
  agent any
  tools {
    nodejs 'NodeJS18'  // Must match your Global Tool Configuration name
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
        sh 'npx playwright install --with-deps'
      }
    }
    stage('Run Playwright Tests') {
      steps {
        sh 'npx playwright test'
      }
    }
  }
  post {
    always {
      junit 'test-results/junit-report.xml'
      publishHTML(target: [
        allowMissing: false,
        alwaysLinkToLastBuild: true,
        keepAll: true,
        reportDir: 'playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright Report'
      ])
    }
  }
}
