function percorreArray(pacientes, comportamento){
	for (var i = 0; i <= pacientes.length-1; i++) {
		var pacienteTr = pacientes[i];

		comportamento(pacienteTr);
	}
}