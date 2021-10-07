angular.module("myApp").factory("postFactory", postFactory);
function postFactory($http) {
    return {
        getTenPosts: getTenPosts,
        getOnePost: getOnePost
    };
    function getTenPosts() {
        return $http.get("https://jsonplaceholder.typicode.com/posts")
            .then(complete).catch(failed);
    }

    function getOnePost(postId) {
        return $http.get("https://jsonplaceholder.typicode.com/posts/" + postId)
            .then(complete).catch(failed);
    }
    function complete(response) {
        return response.data;
    }
    function failed(error) {
        return error;
    }
}