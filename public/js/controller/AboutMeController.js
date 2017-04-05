app.controller('AboutMeController', function($scope) {
    $scope.$on('$viewContentLoaded', function(){
        //For other elements, set the style and hover effects
        var elements = $(".cell");
        for(var i  = 0; i < elements.length; i++){
            console.log(i);
            const element = elements[i];
            addHoverEffect(element, null);
            setStyle(element);
        }
    });
});