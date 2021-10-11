angular.module("novelBooks").factory("NovelsFactory", NovelsFactory)
function NovelsFactory($http) {
    return {
        getAllNovels: getAllNovels,
        getOneNovel: getOneNovel,
        deleteOneNovel:deleteOneNovel,
        addOneNovel:addOneNovel,
        updateOneNovel:updateOneNovel,
        getPublishers:getPublishers,
        addUser: addUser
    };
    function getAllNovels() {
        return $http.get("/api/books").then(complete).catch(failed);
    }
    function getOneNovel(bookID) {
        return $http.get("/api/books/" + bookID).then(complete).catch(failed);
    }
    function getPublishers(bookID) {
        return $http.get("/api/books/" + bookID+"/publisher").then(complete).catch(failed);
    }
    function deleteOneNovel(bookID) {
        return $http.delete("/api/books/" +bookID).then(complete).catch(failed);
    }
    function addOneNovel(book) {
        return $http.post("/api/books/" ,book).then(complete).catch(failed);
    }
    function updateOneNovel(id,book) {
        return $http.put("/api/books/"+id,book).then(complete).catch(failed);
    }
    function addUser(newUser) {
        return $http.post("/api/users",newUser).then(complete).catch(failed);
    }
    function complete(response) {
        return response.data;
    }
    function failed(error) {
        return error.status.statusText;



    }
}