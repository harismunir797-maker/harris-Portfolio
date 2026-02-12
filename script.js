// Wait for the HTML to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    const viewProjectsBtn = document.getElementById('view-projects-btn');
    const projectsSection = document.getElementById('projects');

    // Add click event to the button
    viewProjectsBtn.addEventListener('click', () => {
        // Toggle the 'hidden' and 'show' classes
        if (projectsSection.classList.contains('hidden')) {
            projectsSection.classList.remove('hidden');
            projectsSection.classList.add('show');
            
            // Change button text
            viewProjectsBtn.textContent = "Hide Projects";

            // Smoothly scroll to the projects section
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If already shown, hide it again
            projectsSection.classList.remove('show');
            projectsSection.classList.add('hidden');
            
            // Reset button text
            viewProjectsBtn.textContent = "View Projects";
        }
    });

});