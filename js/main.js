// Array con los datos de los teléfonos
const phones = [
    {
        id: 1,
        name: "Nova X Pro",
        price: 699,
        description: "Pantalla AMOLED de 6.7 pulgadas, 256GB de almacenamiento y cámara triple de 108MP.",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "Galaxy Ultra 5G",
        price: 899,
        description: "Procesador de última generación, batería de larga duración con carga ultrarrápida de 120W.",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Zenith Lite",
        price: 399,
        description: "Elegante, ligero y con un rendimiento excelente para tus redes sociales y juegos casuales.",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Alpha Prime",
        price: 750,
        description: "Diseño prémium en cristal y aluminio, resistente al agua IP68 y estabilización óptica.",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        name: "Pixel Horizon",
        price: 549,
        description: "La mejor experiencia fotográfica con inteligencia artificial integrada y Android puro.",
        image: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "Titanium Fold",
        price: 1199,
        description: "Tecnología plegable de vanguardia con pantalla dual inmersiva y multitarea avanzada.",
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=500&q=80"
    }
];

// Elementos del DOM
const productContainer = document.getElementById('product-container');
const searchInput = document.getElementById('searchInput');

// Función para renderizar los productos en pantalla
function displayProducts(productsToDisplay) {
    productContainer.innerHTML = "";

    if (productsToDisplay.length === 0) {
        productContainer.innerHTML = `
            <div class="col-12 text-center py-4">
                <p class="text-muted fs-5">No se encontraron teléfonos que coincidan con tu búsqueda.</p>
            </div>
        `;
        return;
    }

    productsToDisplay.forEach(phone => {
        const col = document.createElement('div');
        col.className = "col";
        
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${phone.image}" class="card-img-top" alt="${phone.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold text-dark">${phone.name}</h5>
                    <p class="card-text text-secondary small">${phone.description}</p>
                    <div class="mt-auto">
                        <p class="fs-5 fw-bold text-dark mb-2">$${phone.price} USD</p>
                        <button class="btn btn-custom-yellow w-100 fw-semibold" onclick="alert('¡Has seleccionado el ${phone.name}!')">Comprar</button>
                    </div>
                </div>
            </div>
        `;
        productContainer.appendChild(col);
    });
}

// Filtrar productos al escribir en el buscador
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPhones = phones.filter(phone => 
        phone.name.toLowerCase().includes(searchTerm) || 
        phone.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredPhones);
});

// Cargar todos los productos al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(phones);
});