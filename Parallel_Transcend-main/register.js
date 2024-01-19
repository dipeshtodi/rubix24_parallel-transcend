// Sample resource data (you would fetch this from a server in a real application)
const resources = [
    { title: "Tax Guide 2023", description: "A comprehensive guide to tax regulations for the year 2023." },
    { title: "Tax Forms and Templates", description: "Downloadable tax forms and templates for various purposes." },
    { title: "Tax Planning Strategies", description: "Strategies to optimize your tax planning and reduce liabilities." },
    // Add more resource objects as needed
];

// Function to create resource cards and display them
function displayResources() {
    const resourceList = document.getElementById("resource-list");

    resources.forEach((resource) => {
        const resourceCard = document.createElement("div");
        resourceCard.classList.add("resource-card");

        const titleElement = document.createElement("div");
        titleElement.classList.add("resource-title");
        titleElement.textContent = resource.title;

        const descriptionElement = document.createElement("div");
        descriptionElement.classList.add("resource-description");
        descriptionElement.textContent = resource.description;

        resourceCard.appendChild(titleElement);
        resourceCard.appendChild(descriptionElement);

        resourceList.appendChild(resourceCard);
    });
}

// Initial resource display
displayResources();
