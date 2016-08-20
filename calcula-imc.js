
var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click", function(){
	var pacientes = document.getElementsByClassName("paciente");

	percorreArray(pacientes, function(pacienteTr){
		var paciente = montaPaciente(pacienteTr);
		var imc = paciente.pegaImc();

		var tdImc  = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;
			
		console.log(imc);

	});	
});
	