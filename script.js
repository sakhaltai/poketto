document.querySelectorAll(".pokemon-name").forEach((nameElement) => {
  nameElement.addEventListener("mouseover", () => {
    nameElement.textContent = "Japanese Name"; // Replace with actual Japanese names
  });
  nameElement.addEventListener("mouseout", () => {
    nameElement.textContent = "English Name"; // Replace with actual English names
  });
});

// Add functionality for playing cry sound on click
document.querySelectorAll(".pokemon-cry").forEach((cryElement) => {
  cryElement.addEventListener("click", () => {
    // Play cry sound
  });
});

// Add hover animation functionality here
document.querySelectorAll('.pokemon-name').forEach(nameElement => {
    nameElement.addEventListener('mouseover', () => {
        nameElement.textContent = 'フシギダネ'; // Example for Bulbasaur
    });
    nameElement.addEventListener('mouseout', () => {
        nameElement.textContent = '001 - Bulbasaur';
    });
});

document.querySelectorAll('.pokemon-cry').forEach(cryElement => {
    cryElement.addEventListener('click', () => {
        const audio = new Audio('path-to-cry.mp3'); // Replace with actual path
        audio.play();
    });
});

// Add additional JavaScript for animation on hover and other interactive elements
