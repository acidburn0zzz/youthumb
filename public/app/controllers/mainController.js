angular.module('mainController', [])

.controller('mainController', function(Youthumb, $location) {
    
    var vm = this;
    
    vm.getYouthumb = function() {
        
        vm.error = '';
        
        // strip the youtube link to get the youtube id
        vm.youtube_id = Youthumb.stripLink(vm.youthumbInput);
        
        // callback function to handle valid og not valid id
        function changeView(youtube_id, valid){
            if (valid) {
                $location.path('/watch').search({v: youtube_id});
                // clear the input field for easier on next entry
                vm.youthumbInput = "";
            }
            else {
                vm.error = 'Not a valid youtube id. Try again';
            }
        };
        
        // check if there is a id and then checck if its valid
        if (vm.youtube_id)
            Youthumb.valid(vm.youtube_id, changeView);
    };
})