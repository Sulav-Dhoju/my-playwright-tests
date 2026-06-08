pipeline {
  agent any

  tools {
    nodejs 'NodeJS18'  // Must match Global Tool Configuration
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
        bat 'npx playwright install --with-deps'
      }
    }

    stage('Run Playwright Tests') {
      steps {
        bat 'npx playwright test'
      }
    }
  }

  post {
    always {

      // JUnit report (safe if file exists)
      junit allowEmptyResults: true, testResults: 'test-results/**/*.xml'

      // HTML report (Playwright)
      publishHTML(target: [
        allowMissing: true,
        alwaysLinkToLastBuild: true,
        keepAll: true,
        reportDir: 'playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright Report'
      ])
    }
  }
}
