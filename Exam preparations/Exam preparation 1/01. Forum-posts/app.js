window.addEventListener("load", solve);

function solve(){
    document.getElementById("publish-btn").addEventListener('click', createRawPost);
    document.getElementById("clear-btn").addEventListener('click', clearPosts);

    let titleField = document.getElementById("post-title");
    let categoryField = document.getElementById("post-category");
    let contentField = document.getElementById("post-content");
    let reviewField = document.getElementById("review-list");
    let publishField = document.getElementById("published-list");

    function createRawPost(){
        let title = titleField.value;
        let category = categoryField.value;
        let content = contentField.value;

        if(!title || !category || !content){
            return;
        }

        let li = document.createElement('li');
        li.classList.add('rpost');

        let article = createArticle(title, category, content);
        
        let editBtn = document.createElement('button');
        editBtn.classList.add('action-btn', 'edit');
        editBtn.innerText = 'Edit';
        editBtn.addEventListener('click', editPost);

        let approveBtn = document.createElement('button');
        approveBtn.classList.add('action-btn', 'approve');
        approveBtn.innerText = 'Approve';
        approveBtn.addEventListener('click', approvePost);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(approveBtn);
        reviewField.appendChild(li);

        titleField.value = "";
        categoryField.value = "";
        contentField.value = "";
    }

    function createArticle(title, category, content){
        let article = document.createElement('article');

        let h4 = document.createElement('h4');
        h4.innerText = title;

        let categoryP = document.createElement('p');
        categoryP.innerText = `Category: ${category}`;

        let contentP = document.createElement('p');
        contentP.innerText = `Content: ${content}`;

        article.appendChild(h4);
        article.appendChild(categoryP);
        article.appendChild(contentP);

        return article;
    }

    function editPost(e){
        let currLi = e.target.parentElement.children[0].children;

        titleField.value = currLi[0].textContent;
        categoryField.value = currLi[1].textContent.split(': ')[1];
        contentField.value = currLi[2].textContent.split(': ')[1];

        e.target.parentElement.remove();
    }

    function approvePost(e){
        let currLi = e.target.parentElement;
        currLi.children[1].remove();
        currLi.children[1].remove();

        publishField.appendChild(currLi);
    }

    function clearPosts(){
        Array.from(publishField.children).forEach(child => child.remove());
    }
}