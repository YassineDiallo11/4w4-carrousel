(function(){
    console.log('Début du carrousel') 
    console.log('Début du carrousel')
    let carrousel__ouvrir = document.querySelector('.carrousel__ouvrir')
    let carrousel = document.querySelector('.carrousel')
    let carrousel__x = document.querySelector('.carrousel__x')
    let carrousel__figure = document.querySelector('.carrousel__figure')
    let carrousel__form = document.querySelector('.carrousel__form')
    console.log(carrousel__form.tagName)

    let galerie = document.querySelector('.galerie')
    let galerie__img = galerie.querySelectorAll('img')
    console.log(galerie__img.length)
    carrousel__ouvrir.addEventListener('mousedown', function(){
       carrousel.classList.add('carrousel--activer')
       ajouter_les_images_de_galerie()
    })
 
    carrousel__x.addEventListener('mousedown', function(){
       carrousel.classList.remove('carrousel--activer')
    })

    /**pour chaque image de la galerie ajouter dans le carrousel
     * 
     */
    let position = 0
 function ajouter_les_images_de_galerie()
 {
    for (const elem of galerie__img){
       ajouter_les_images_dans_carrousel(elem)
       ajouter_un_radio_bouton_dans_le_carrousel()
    }
 }
 
 /**
  * Création dynamique d'une image pour le carrousel
  * @param {*} elem une image de la galerie
  */
 function ajouter_les_images_dans_carrousel(elem)
 {
   let img = document.createElement('img')
       img.classList.add('carrousel__img')
       img.src = elem.src
       
       // console.log(img.src)
       carrousel__figure.appendChild(img);
 }
 
function ajouter_un_radio_bouton_dans_le_carrousel()
{
   let rad = document.createElement('input')
   rad.setAttribute('type','radio')
   rad.setAttribute('name','carrousel__rad')
   rad.classList.add('carrousel__rad')
   rad.dataset.index = position 
   position++
   carrousel__form.append(rad)
   
}

 
 })()