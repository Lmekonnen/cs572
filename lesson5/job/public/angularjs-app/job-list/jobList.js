angular.module("jobSearching").controller("jobsController", jobsController)
function jobsController(jobFactory) {
    const vm = this;
    vm.title = "Job Searching App";
   
    vm.addJob = function () {
        const data = {
            title: vm.jobTitle,
            salary: vm.jobSalary,
            description: vm.jobDescription,
            experience: vm.jobExperience,
            skills: vm.jobSkills,
            postDate: vm.jobPostDate
        }
        if (vm.jobForm.$valid && vm.jobForm.$dirty) {
            jobFactory.addOneJob(data).then(function (response) {
                console.log(response);
            }
            )
        }
    }
    vm.deleteJob = function (id) {
        jobFactory.deleteOneJob(id).then(function (reponse) {
            console.log("game", id);
        })
    }
    vm.offset = 0;
    vm.getAll= function (ofs) {
        jobFactory.getAllJobs(ofs).then(function (response) {
            vm.jobs = response;
            console.log(response);
        })
    }
    vm.next = function () {
        vm.offset += 3;
        vm.getAll(vm.offset);
        setTimeout(() => {
            if (vm.jobs.length === 0) {
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