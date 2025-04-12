document.addEventListener('DOMContentLoaded', () => {
    const userCardTemplate = document.getElementById("user-card-template");
    const userCardContainer = document.getElementById("results");
    const searchInput = document.getElementById("searchInput");

    let users = [];

    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();

        users.forEach(user => {
            const isVisible =
                user.name.toLowerCase().includes(value) ||
                user.email.toLowerCase().includes(value) ||
                (user.phone && user.phone.toLowerCase().includes(value)) ||
                user.address.toLowerCase().includes(value);
            user.element.classList.toggle("hidden", !isVisible);
        });
    });

    fetch("./data.json")
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            users = data.map(user => {
                const card = userCardTemplate.content.cloneNode(true).children[0];
                const name = card.querySelector('[data-name]');
                const email = card.querySelector('[data-email]');
                const phone = card.querySelector('[data-phone]');
                const address = card.querySelector('[data-address]');

                if (name) name.textContent = user.name || '';
                if (email) email.textContent = user.email || '';
                if (phone) phone.textContent = user.phone || '';
                if (address) address.textContent = user.address || '';

                userCardContainer.append(card);

                return {
                    name: user.name || '',
                    email: user.email || '',
                    phone: user.phone || '',
                    address: user.address || '',
                    element: card
                };
            });
        })
        .catch(error => {
            console.error("Error loading or processing data:", error);
            userCardContainer.textContent = "Failed to load user data.";
        });
});