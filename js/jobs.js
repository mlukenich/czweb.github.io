const jobsData = [
  {
    "title": "Cloud Database Engineers",
    "location": "Annapolis Junction, MD",
    "type": "Full-time",
    "clearance": "TS/SCI with Polygraph",
    "responsibilities": "Design, build, and maintain scalable and reliable cloud database solutions. Automate deployment and management of database infrastructure. Ensure security and compliance of cloud database environments.",
    "qualifications": "5+ years of experience with cloud-native databases (e.g., RDS, Aurora, Spanner). Strong background in database administration. Experience with database infrastructure as code."
  },
  {
    "title": "Cloud Software Engineers",
    "location": "Annapolis Junction, MD",
    "type": "Full-time",
    "clearance": "TS/SCI with Polygraph",
    "responsibilities": "Design, build, and maintain scalable and reliable cloud-native applications. Automate deployment and CI/CD pipelines. Ensure security and compliance of software.",
    "qualifications": "5+ years of experience with languages like Python, Java, or Go. Strong background in cloud platforms (AWS, Azure, or GCP). Experience with microservices and containerization."
  },
  {
    "title": "DevOps Engineers",
    "location": "Annapolis Junction, MD",
    "type": "Full-time",
    "clearance": "TS/SCI with Polygraph",
    "responsibilities": "Design, build, and maintain CI/CD pipelines. Automate deployment, monitoring, and infrastructure management. Ensure security and compliance of the toolchain.",
    "qualifications": "5+ years of experience with DevOps tools (e.g., Jenkins, GitLab, Docker, Kubernetes). Strong background in Linux/Unix administration. Experience with infrastructure as code (e.g., Terraform, Ansible)."
  },
  {
    "title": "System Engineers",
    "location": "Annapolis Junction, MD",
    "type": "Full-time",
    "clearance": "TS/SCI with Polygraph",
    "responsibilities": "Design, build, and maintain scalable and reliable IT infrastructure, including servers, networks, and storage. Automate system provisioning and management. Ensure security and compliance of the overall system.",
    "qualifications": "5+ years of experience with system design and architecture. Strong background in Linux/Windows administration. Experience with scripting and automation."
  },
  {
    "title": "Software Engineers",
    "location": "Annapolis Junction, MD",
    "type": "Full-time",
    "clearance": "TS/SCI with Polygraph",
    "responsibilities": "Develop and maintain backend services and APIs. Write clean, efficient, and well-tested code. Collaborate with front-end developers to integrate user-facing elements.",
    "qualifications": "5+ years of experience with one or more backend languages (e.g., Python, Java, Go). Experience with database technologies. Understanding of software development lifecycle."
  },
  {
    "title": "Database Administrators",
    "location": "Annapolis Junction, MD",
    "type": "Full-time",
    "clearance": "TS/SCI with Polygraph",
    "responsibilities": "Manage, monitor, and maintain company databases. Ensure data integrity, security, and availability. Perform backups, restores, and performance tuning.",
    "qualifications": "5+ years of experience with database administration (e.g., PostgreSQL, Oracle, SQL Server). Strong background in SQL and database design. Experience with scripting for automation."
  },
  {
    "title": "System Administrators",
    "location": "Annapolis Junction, MD",
    "type": "Full-time",
    "clearance": "TS/SCI with Polygraph",
    "responsibilities": "Install, configure, and maintain operating systems and server hardware. Manage user accounts and permissions. Ensure system security and perform regular backups.",
    "qualifications": "5+ years of experience with Linux/Windows server administration. Strong background in networking and security principles. Experience with virtualization technologies."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('job-listings-container');

  if (container && jobsData.length > 0) {
    jobsData.forEach(job => {
      const jobElement = document.createElement('div');
      jobElement.className = 'job-listing bg-white p-6 rounded-lg shadow-md border border-gray-200';
      jobElement.innerHTML = `
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div>
                <h4 class="text-sky-600 text-xl font-bold">${job.title}</h4>
                <p class="text-lg text-gray-600">${job.location} &bull; ${job.type} &bull; ${job.clearance}</p>
            </div>
            <button class="job-toggle mt-4 md:mt-0 btn-secondary">View Details</button>
        </div>
        <div class="job-details hidden mt-4 pt-4 border-t border-gray-200">
            <p class="text-lg"><strong>Responsibilities:</strong><br>${job.responsibilities}</p>
            <p class="mt-2 text-lg"><strong>Qualifications:</strong><br>${job.qualifications}</p>
            <a href="/index.html#contact" class="mt-4 inline-block btn-primary">Apply Now</a>
        </div>
      `;
      container.appendChild(jobElement);
    });

    // Initialize event listeners for the newly added toggle buttons
    const jobToggles = container.querySelectorAll('.job-toggle');
    jobToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const jobListing = toggle.closest('.job-listing');
        const jobDetails = jobListing.querySelector('.job-details');
        const isHidden = jobDetails.classList.toggle('hidden');
        toggle.textContent = isHidden ? 'View Details' : 'Hide Details';
      });
    });

  } else if (container) {
    container.innerHTML = '<p class="text-center text-lg text-gray-600">There are currently no open positions. Please check back soon!</p>';
  }
});