function solution(command) {
    let self = this;

    let commands = {
        upvote: () => {
            self.upvotes++;
        },
        downvote: () => {
            self.downvotes++;
        },
        score: () => {
            let currentUpvotes = self.upvotes;
            let currentDownvotes = self.downvotes;
            let totalVotes = currentUpvotes + currentDownvotes;
            let rating = 'new';

            if (totalVotes >= 10) {
                if (currentUpvotes > totalVotes * 0.66) {
                    rating = "hot";
                } else if (currentDownvotes > currentUpvotes) {
                    rating = "unpopular";
                } else if (currentUpvotes > 100 || currentDownvotes > 100) {
                    rating = "controversial";
                }
            }

            if (totalVotes > 50) {
                let modifier = Math.ceil(Math.max(currentUpvotes, currentDownvotes) * 0.25);
                currentUpvotes += modifier;
                currentDownvotes += modifier;
            }

            let totalScore = currentUpvotes - currentDownvotes;
            return [currentUpvotes, currentDownvotes, totalScore, rating];
        }
    };

    return commands[command]();
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
console.log(score);
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}
score = solution.call(post, 'score');
console.log(score);
