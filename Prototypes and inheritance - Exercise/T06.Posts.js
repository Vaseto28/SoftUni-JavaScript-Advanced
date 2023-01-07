function solution(){
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }
    }

    Post.prototype.toString = function(){
        return `Post: ${this.title}\nContent: ${this.content}`.trimEnd();
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);

            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
    }

    SocialMediaPost.prototype.addComment = function(comment) {
        this.comments.push(comment);
    }

    SocialMediaPost.prototype.toString = function(){
        let result =  `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\n` 
        if (this.comments.length === 0 || this.comments === undefined){
            return result;
        }
        else{
            return result += ` * ${this.comments.join('\n * ')}`;
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content)
            
            this.views = views;
        }
    }

    BlogPost.prototype.view = function(){
        this.views++;
        return this;
    }

    BlogPost.prototype.toString = function(){
        return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
    }

    return {Post, SocialMediaPost, BlogPost};
}

const classes = solution();

let post = new classes.Post("Post", "Content");
console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

let bp = new classes.BlogPost("TestTitle", "test Content", 80);

bp.view();
bp.view();
bp.view();
bp.view();
bp.view();
bp.view();

console.log(bp.toString());
