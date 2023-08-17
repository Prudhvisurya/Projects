// Get references to HTML elements
const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submitButton');
const devOpsToolsText = document.getElementById('devOpsToolsText');
const devOpsToolsList = document.getElementById('DevOpsToolsList');
const responseSection = document.getElementById('responseSection');
const responseOptions = document.getElementById('responseOptions');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Define DevOps tools
const devOpsTools = [
  'Version Control (Git)',
  'Continuous Integration (CI) - Jenkins',
  'Continuous Deployment (CD)',
  'Containerization (Docker)',
  'Orchestration (Kubernetes)',
  'Infrastructure as Code (IaC)',
  'Monitoring and Logging',
  'Version Control (Git) - Bitbucket',
  'Build Tools - Maven and Gradle',
  'Scripting (Groovy)',
  'Configuration Management (Ansible, Puppet, Chef)',
  'Infrastructure Provisioning (Terraform)',
  'Monitoring (Nagios) and (Prometheus)'
];

// Function to display DevOps tools
function displayDevOpsTools() {
  devOpsToolsList.innerHTML = ''; // Clear existing list
  devOpsTools.forEach(tool => {
    const li = document.createElement('li');
    li.textContent = tool;
    devOpsToolsList.appendChild(li);
  });
  devOpsToolsList.style.display = 'block'; // Display the DevOps tools list
}

// Event listener for button click
submitButton.addEventListener('click', function () {
  const name = nameInput.value;
  devOpsToolsText.textContent = `Hey ${name}, want to know the list of tools used in DevOps?`;
  devOpsToolsText.style.fontWeight = 'bold';
  devOpsToolsText.style.marginBottom = '10px';

  // Show the response section and options
  responseSection.style.display = 'block';
  responseOptions.style.display = 'block';
  devOpsToolsList.style.display = 'none'; // Hide the DevOps tools list initially
});

// Event listener for "Yes" button click
yesButton.addEventListener('click', function () {
  // Display DevOps tools
  displayDevOpsTools();
  // Hide the response options
  responseOptions.style.display = 'none';
});

// Event listener for "No" button click
noButton.addEventListener('click', function () {
  // Show a message for "No"
  devOpsToolsText.textContent = "Better luck next time!";
  // Hide the response options
  responseOptions.style.display = 'none';
});
