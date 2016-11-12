angular.module('pdApp').filter('filt',filt)

function filt(){

    return function  (input){

        if(!input){
            return 'err';
        }

        return input.toUpperCase();

    }
}