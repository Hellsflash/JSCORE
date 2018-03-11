function solve() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\n` + `Content: ${this.content}\n`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let base = super.toString();
            if (this.comments.length === 0) {
                return base + `Rating: ${this.likes - this.dislikes}`
            } else {
                return base + `Rating: ${this.likes - this.dislikes}\n`
                    + `Comments:\n`
                    + ` * ${this.comments.join('\n * ')}`;
            }
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let base = super.toString();
            return base + `Views: ${this.views}`;
        }
    }

    return {Post,SocialMediaPost,BlogPost}
}
let post =solve();
let SocialMediaPost =post.SocialMediaPost;
let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");


console.log(scm.toString());

