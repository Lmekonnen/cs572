angular.module("meanGames").factory("GamesFactory", GamesFactory)
function GamesFactory($http) {
    return {
        getAllGames: getAllGames,
        getOneGame: getOneGame,
        addOneGame:addOneGame,
        deleteOneGame:deleteOneGame
    };
    function getAllGames() {
        return $http.get("/api/games").then(complete).catch(failed);
    }
    function getOneGame(id) {
        return $http.get("/api/games/" + id).then(complete).catch(failed);
    }
    function addOneGame(id) {
        return $http.post("/api/games/",id).then(complete).catch(failed);
    }
    function deleteOneGame(id) {
        return $http.delete("/api/games/" , id).then(complete).catch(failed);
    }
    function complete(response) {
        return response.data;
    }
    function failed(error) {
        return error.status.statusText;



    }
}