function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_rkDRCI6qM';
    const USERNAME = 'admin';
    const PASSWORD = 'admin';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {'Authorization': 'Basic ' + BASE_64};
    let posts = {};
    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', loadComments);

    function loadPosts() {
        $.ajax({
            url: URL + '/posts',
            method: 'GET',
            headers: AUTH,
        }).then(function (res) {
            $('#posts').empty();
            for (let post of res) {
                $('#posts').append(
                    $(`<option value="${post._id}">${post.title}</option>`)
                )
                posts[post._id] = post.body;
            }
        }).catch(function (err) {
            console.log(err);
        });
    }

    function loadComments() {
        let postId = $('#posts').val();
        let title = $('#posts').find('option:selected').text();
        $('#post-title').text(title);
        $('#post-body').text(posts[postId]);
        $.ajax({
            url: URL + `/comments/?query={"post_id":"${postId}"}`,
            method: 'GET',
            headers: AUTH,
        }).then(function (res) {
            $('#post-comments').empty();
            for (let comm of res) {
                $('#post-comments').append(
                    $(`<li>${comm.text}</li>`)
                );
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
}