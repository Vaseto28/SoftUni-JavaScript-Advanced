function getArticleGenerator(articles) {
let content = document.getElementById('content');

    return function showNext(){
        if (!articles.length){
            return;
        }

        content.innerHTML += `<article>${articles.shift ()}</article>`;
    }
}
