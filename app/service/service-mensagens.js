/**
 * Created by victor on 12/11/2016.
 */
angular.module('pdApp').service('MSGS',MensagensService)

function MensagensService(toastr){

    this.suc = sucesso;
    this.er = erro;
    function sucesso(msg, titulo){
        titulo = titulo || "Sucesso";
        toastr.success(msg,titulo);
    }
    function erro(msg, titulo){
        titulo = titulo || 'EROOU';
        toastr.error(msg,titulo);
    }
}