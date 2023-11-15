/*
const productsData = `[
    {
        src: 'img/product1.jpg',
        alt: 'img obj data',
        name: 'ELLERY X M'O CAPSULE',
        link: 'product.html',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian
        arbiter
        of cool Kym Ellery teams up with Moda Operandi.',
        price: $52.00
        cart: 'img/Add to cart.svg'
    },
    {
        src: 'img/pr2.png',
        alt: 'img obj data',
        name: 'ELLERY X M'O CAPSULE',
        link: 'product.html',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian
        arbiter
        of cool Kym Ellery teams up with Moda Operandi.',
        price: $52.00
        cart: 'img/Add to cart.svg'
    },
    {
        src: 'img/product3.jpg',
        alt: 'img obj data',
        name: 'ELLERY X M'O CAPSULE',
        link: 'product.html',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian
        arbiter
        of cool Kym Ellery teams up with Moda Operandi.',
        price: $52.00
        cart: 'img/Add to cart.svg'
    },
    {
        src: 'img/product4.jpg',
        alt: 'img obj data',
        name: 'ELLERY X M'O CAPSULE',
        link: 'product.html',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian
        arbiter
        of cool Kym Ellery teams up with Moda Operandi.',
        price: $52.00
        cart: 'img/Add to cart.svg'
    },
    {
        src: 'img/product5.jpg',
        alt: 'img obj data',
        name: 'ELLERY X M'O CAPSULE',
        link: 'product.html',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian
        arbiter
        of cool Kym Ellery teams up with Moda Operandi.',
        price: $52.00
        cart: 'img/Add to cart.svg'
    },
    {
        src: 'img/product6.jpg',
        alt: 'img obj data',
        name: 'ELLERY X M'O CAPSULE',
        link: 'product.html',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian
        arbiter
        of cool Kym Ellery teams up with Moda Operandi.',
        price: $52.00
        cart: 'img/Add to cart.svg'
    }
    ]
    `   

    const productBox = document.querySelector('.product-box');

        productsData.forEach(item => {
    
        const productEl = document.createElement('div');
        productEl.classList.add('product');
        

        const productImg = document.createElement('img');
        productImg.classList.add('product__img');
        productImg.setAttribute('alt', item.alt);
        productImg.src = item.src;

        const productContent = document.createElement('div');
        productContent.classList.add('product__content');

        const productLink = document.createElement('a');
        productLink.href = item.link;
        productLink.textContent = item.name;

        const productText = document.createElement('p');
        productText.classList.add('product__text')
        productText.textContent = item.desc;

        const productPrice = document.createElement('p');
        productPrice.classList.add('product__price')
        productPrice.textContent = item.price;

        productContent.appendChild(productLink);
        productContent.appendChild(productText);
        productContent.appendChild(productPrice);
        productEl.appendChild(productImg);
        productEl.appendChild(productContent);
        productBox.appendChild(productEl);
    });
    */