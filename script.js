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

document.addEventListener("DOMContentLoaded", () => {
  fetch("pokemonData.json")
    .then((response) => response.json())
    .then((pokemonList) => {
      const pokemonContainer = document.getElementById("pokemon-list");
      pokemonList.forEach((pokemon) => {
        const pokemonCard = createPokemonCard(pokemon);
        pokemonContainer.appendChild(pokemonCard);
      });
    });

  document.getElementById("searchBar").addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    filterPokemon(searchText, pokemonContainer);
  });
});

function createPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.className = "pokemon-card";
  // Add other elements and details to the card
  return card;
}

function filterPokemon(searchText, container) {
  const cards = container.getElementsByClassName("pokemon-card");
  Array.from(cards).forEach((card) => {
    const name = card.querySelector(".pokemon-name").textContent.toLowerCase();
    card.style.display = name.includes(searchText) ? "" : "none";
  });
}
