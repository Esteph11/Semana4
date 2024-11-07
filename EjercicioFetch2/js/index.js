fetch('https://api.escuelajs.co/api/v1/categories')  
.then(response => response.json()) //Conversion a JSON
.then(data => {
    let cards = ''; 
    
        for (let category of data) {
            
            let categoriesImage = `https://random.imagecdn.app/500/150`; // Generar un avatar basado en el id del usuario  
        
            cards += `  
                <div class="col-md-4 mb-4">  
                    <div class="card">  
                        <img src="${categoriesImage}" class="card-img-top" alt="${category.name}">  
                        <div class="card-body">  
                            <h5 class="card-title">${category.name}</h5>  
                        </div>  
                    </div>  
                </div>`;  
        }  
            
        // Renderizar las tarjetas a HTML  
        document.getElementById("categoriesCard").innerHTML = cards;  
    })  
    .catch(error => {  
        console.error('Error fetching categories:', error);  
        document.getElementById("categoriesCard").innerHTML = '<div class="alert alert-danger">Error al cargar las categorías</div>';  
    });  
