const jobs = [
    {
      title: "Software Engineer",
      image: "software-engineer.svg",
      details:
        "Responsible for designing, developing and maintaining software systems and applications.",
      openPositions: "2",
      link: "#",
    },
  
    {
      title: "Data Customer Service Representative (CSR)",
      image: "data-scientist.svg",
      details:
        "Handle customer inquiries, resolve issues, and provide excellent service via phone, email, or online chat.",
      openPositions: "3",
      link: "#",
    },

    {
      title: "Data Entry Clerk",
      image: "data-scientist.svg",
      details:
        "Input and manage data into computer systems, ensuring accuracy and efficiency.",
      openPositions: "3",
      link: "#",
    },

    {
      title: "Content Writer",
      image: "data-scientist.svg",
      details:
        "Create written content for websites, blogs, or marketing materials. Strong writing skills are essential.",
      openPositions: "3",
      link: "#",
    },

    {
      title: "Graphic Designer",
      image: "data-scientist.svg",
      details:
        "Design visual content for websites, advertisements, and other media. Proficiency in graphic design software is required.",
      openPositions: "3",
      link: "#",
    },

    {
      title: "IT Support Specialist",
      image: "data-scientist.svg",
      details:
        "Provide technical assistance and support to end-users, troubleshooting hardware and software issues.",
      openPositions: "3",
      link: "#",
    },

    {
      title: "Transcriptionist",
      image: "data-scientist.svg",
      details:
        "Listen to audio recordings and convert them into written documents, requiring good listening and typing skills.",
      openPositions: "3",
      link: "#",
    },

    {
      title: "Virtual Assistant",
      image: "data-scientist.svg",
      details:
        "Assist clients with administrative tasks, scheduling, and managing emails remotely.",
      openPositions: "3",
      link: "#",
    },

    {
      title: "Social Media Manager",
      image: "data-scientist.svg",
      details:
        " Create and manage content on social media platforms, engage with followers, and analyze performance metrics.",
      openPositions: "3",
      link: "#",
    },

    {
      title: "Accounting Assistant",
      image: "data-scientist.svg",
      details:
        "Assist with financial tasks such as bookkeeping, invoicing, and data entry.",
      openPositions: "3",
      link: "#",
    },
  
    {
      title: "Librarian",
      image: "project-manager.svg",
      details:
        "Organize and manage library resources, assist patrons, and maintain a quiet and accessible environment.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Telemarketing Representative",
      image: "product-manager.svg",
      details:
        "Make outbound calls to promote products or services and generate sales leads.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Freelance Photographer",
      image: "sales-representative.svg",
      details:
        "Capture images for events, portraits, or stock photography. Physical mobility may not be a significant barrier in some cases.",
      openPositions: "4",
      link: "#",
    },
  
    {
      title: "Online Tutor",
      image: "marketing-manager.svg",
      details:
        "Provide tutoring services in various subjects through online platforms.",
      openPositions: "1",
      link: "#",
    },

    {
      title: "Medical Transcriptionist",
      image: "marketing-manager.svg",
      details:
        "Transcribe medical records dictated by healthcare professionals, ensuring accuracy and confidentiality.",
      openPositions: "1",
      link: "#",
    },
  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
  }
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "Apply Now";
        detailsBtn.classList.add("details-btn");
  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });
