
// TEMPLATE MEMBRES
let members = document.querySelector("#template-compe").content.querySelector("#templateCompes");

let competences = document.querySelector(".competences-ol");

    fetch('js/competences.json').then(blob => {
        return blob.json();
    }).then(value => {
        
        let data = value;
        
        // Boucle pour afficher tout le monde
        for (let i = 0; i < data.length; i++){
            let a = document.importNode(members, true);

            let nom = a.querySelector(".compe-text");
            let im = a.querySelector(".compe-img");

            // Mettre les données dans le HTML
            nom.innerHTML = data[i].titre;
            im.src = data[i].image;
            
            
            competences.appendChild(a);
            
        }

    }).catch(error => {
        console.log(error)
    })