document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav a');


    function loadPage(page) {
        let url = '';
        /*  const pageURL = '';
         switch (pageName) {
             case 'home':
                 pageURL = '07_qa.html';
                 break;
             case 'products':
                 pageURL = '02_products.html';
                 break;
             case 'qa':
                 pageURL = '07_qa.html';
                 break;
             case 'default':
                 pageURL = '404.html';
                 break;
         } */

        if (page === 'home') {
            url = '404.html';
        } else if (page === 'product') {
            url = '02_products.html';
        } else if (page === 'qa') {
            url = '07_qa.html';
        } else {
            url = '404.html';
        }
        url = '07_qa.html';
        fetch(url)
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading page:', error);
                content.innerHTML = '<h1>404</h1><p>頁面未找到</p>';
            });

    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });

    // 初始載入首頁
    loadPage('qa');
});

document.addEventListener("DOMContentLoaded", function () {
    const qaComponents = document.querySelectorAll('.qa');
    console.log(qaComponents)
    qaComponents.forEach(component => {
        const paragraphs = component.querySelectorAll('.h6');
        paragraphs.forEach(paragraph => {
            let text = paragraph.innerHTML;
            text = text.replace(/。/g, "。<br>");
            paragraph.innerHTML = text;
        });
    });
});