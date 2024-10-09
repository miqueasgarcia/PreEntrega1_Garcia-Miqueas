let cantidad =prompt("cauntos alumnos son ")
let alumnosTotales=[]

for( i = 0; i< cantidad; i++){
	alumnosTotales[i] =[prompt("nombre del alumno " +(i+1)),0]
}

const tomarAsistencia =(nombre,p)=>{
	let presencia = prompt(nombre + " esta presente?")
	if(presencia == "si" || presencia == "SI"){
		alumnosTotales[p][1]++
	}
}

for(i =0; i < 10; i++){
	for(alumno in alumnosTotales){
		tomarAsistencia(alumnosTotales[alumno][0],alumno)
	}
}

for(alumno in alumnosTotales){
	let resultado = `${alumnosTotales[alumno][0]}:<br>
	___________Presentes: ${alumnosTotales[alumno][1]}<br>
	___________Austentes: ${10 - alumnosTotales[alumno][1]}<br>`
	if(10 - alumnosTotales[alumno][1] > 5 ){
		resultado += "<b> REPROBASTE POR INASISTENCIAS </b><br><br>"
	}else{
		resultado+= "<br> CUMPLISTE CON LAS ASISTENCIAS <br>"
	}
	
	document.write(resultado)
}