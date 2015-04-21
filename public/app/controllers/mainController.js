angular.module('mainController', [])

.controller('mainController', function(Youthumb, $location) {
    
    var vm = this;
    
    vm.getYouthumb = function() {
        
        // strip the youtube link to get the youtube id
        vm.youtube_id = Youthumb.stripLink(vm.youthumbInput);
        
        // check if there is a id and then checck if its valid
        if (vm.youtube_id)
            Youthumb.valid(vm.youtube_id, function(valid) {

                if (valid) {

                    $location.path('/watch').search({v: vm.youtube_id});
                    // clear the input field for easier on next entry and clear posibly error message
                    vm.youthumbInput = "";
                    vm.error = '';

                }

                else {

                    vm.error = 'Not a valid youtube id. Try again';

                }

            });
    };
})