const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const input = document.querySelector('input'); 
const addToCart = document.querySelector('.cart');
let mainImage = document.querySelector('.main-image');
const img1 = document.querySelector('.img1');
const img2  = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const leftArrow = document.querySelector('.left-arrow');
const hamburger = document.querySelector('.fa-bars');

hamburger.addEventListener('click', function() {
    const menu = document.querySelector('.nav-menu');
    if(menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.classList.add('newMenu');
        menu.style.display = 'block';
    }

})


// This is for the responsive navbar
// function hamburger() {
//     const x = document.querySelector('.nav-menu');
//     if (x.className === 'nav-menu') {
//         x.className += ' icon';
//     } else {
//         x.className = 'nav-menu'
//     }
// }


// this is the shopping cart section.

let i = 0; 

function buttonClickPlus() {
    if(i <= 4) {
        i++;
        console.log(i, 'yo')
    }
    input.value = i;
}

function buttonClickMinus() {
    if(i >=1 ) {
        i--;
    }
    input.value =i;
}

function multiply (num) {
    num = 125.00 * i;
    return num
}
multiply();

// finish this asap.

addToCart.addEventListener('click', function() {
   console.log(multiply());
   if (input.value > 0) {
    let cartButton = document.querySelector('.fa-solid');
   cartButton.innerHTML= `<div class='black'>
    <p class='title'>Cart</p>
    <hr>
    <div class='checkout'>
            <p class='shoes'>Fall Limited Edition Sneakers</p>
            <img src='image-product-1-thumbnail.jpg' class='checkout-img'>
            <p class='shoe-cost'>$125.00 x ${i} <span class='bold-price'> $${multiply()}</span></p>
            <i class="fa-solid fa-trash-can"></i>
            <button class='cart'> Checkout</button>
        </div>
   </div>`

   const trash = document.querySelector('.fa-trash-can');
   trash.addEventListener('click', function(e) {
        
   })

   } else {
    cartButton = document.querySelector('.fa-solid');
    cartButton.innerHTML = `<div class='basket-empty'>
    <p class='title'>Cart</p>
    <hr>
    <h2 class='text-empty'>Your cart is empty</h2>
    </div>`
   }   


})




// put the images in an array then
let imagesArray = [img1, img2, img3, img4];
// loop through the array.length
for (let i=0; i <imagesArray.length; i++) {
    let images = imagesArray[i];
    // when a image clicks it will higlight to show what image they're looking at.
    switch(images) {
        case img1:
          img1.addEventListener('click', function(e) {
            mainImage.src='./image-1.jpg';
            // if (e.target = img1 )  {
            //     img1.classList.add('border');
            // } else if (e.target != img1) {
            //     img1.classList.remove('border')
            // }
          })
        break;
        case img2:
            img2.addEventListener('click', function(e) {
                mainImage.src='./image-2.jpg'
                console.log(e, 'whats happening here2')
            })
            break;
        case img3:
            img3.addEventListener('click', function() {
                mainImage.src='./image-3.jpg'
            })
            break;
        case img4:
            img4.addEventListener('click', function() {
                mainImage.src='./image-4.jpg'
            })
            break;
        default:
            break;
    }
}

// carousel here for mobile version.
const nextBtn = document.querySelector('.right-arrow');
const previousBtn = document.querySelector('.left-arrow');
let count = 0;
mainImage.src = imagesArray[count].src;

console.log(mainImage, 'here')

nextBtn.addEventListener('click', function() {
    if (count < imagesArray.length -1) {
     console.log(mainImage.src = imagesArray[(count +=1)].src, 'here2')   
    } else {
        count = 0;
        mainImage.src = imagesArray[count].src;
    }
})

previousBtn.addEventListener('click', function() {
    if (count > 0) {
        mainImage.src = imagesArray[(count -=1)].src
    } else {
        count = imagesArray.length - 1;
        mainImage.src = imagesArray[count].src;
    }
})



