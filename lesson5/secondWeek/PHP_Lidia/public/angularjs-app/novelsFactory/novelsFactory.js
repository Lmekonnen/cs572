angular.module("novelBooks").factory("NovelsFactory", NovelsFactory)
function NovelsFactory($http) {
    return {
        getAllNovels: getAllNovels,
        getOneNovel: getOneNovel
    };
    function getAllNovels() {
        return $http.get("/api/books").then(complete).catch(failed);
    }
    function getOneNovel(bookID) {
        return $http.get("/api/books/" + bookID).then(complete).catch(failed);
    }
    function complete(response) {
        return response.data;
    }
    function failed(error) {
        return error.status.statusText;



    }
}