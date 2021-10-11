//
angular.module("novelBooks").controller("NovelsController",NovelsController)
function NovelsController(NovelsFactory){
    const vm=this;
    vm.title="Novel Books App"
    vm.addNovel = function () {
        const data = {
            title: vm.novelTitle,
            author: vm.novelAuthor,
            genre:vm.novelGenre,
            // publisher: vm.novelPublishers,
        }
        if (vm.novelForm.$valid && vm.novelForm.$dirty) {
            NovelsFactory.addOneNovel(data).then(function (response) {
                console.log(response);
            }
            )
        }
    }
    vm.deleteNovel = function (id) {
        NovelsFactory.deleteOneNovel(id).then(function (reponse) {
            console.log("novel", id);
        })
    }
    vm.offset = 0;
    vm.getAll= function (ofs) {
        NovelsFactory.getAllNovels(ofs).then(function (response) {
            vm.novels = response;
            console.log(response);
        })
    }
    vm.next = function () {
        vm.offset += 3;
        vm.getAll(vm.offset);
        setTimeout(() => {
            if (vm.novels.length === 0) {
                vm.offset = 0;
                vm.getAll(vm.offset);
            }
        }, 30);

    }
    vm.pre =function(){
        vm.offset-=3;  
        if(vm.offset<0){
            vm.offset=0;
        } 
        vm.getAll(vm.offset);
    }

    vm.getAll(vm.offset);
}
