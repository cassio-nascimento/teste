function LeiaMais(){
	var pontos=document.getElementById("pontos");
	var maisTexto=document.getElementById("mais");
	var btnLeiaMais=document.getElementById("btnLeiaMais");

	if(pontos.style.display === "none"){
		pontos.style.display="inline"; 
		maisTexto.style.display="none";
		btnLeiaMais.innerHTML="Leia Mais";

	}else{
		pontos.style.display="none";
		maisTexto.style.display="inline";
		btnLeiaMais.innerHTML="Leia Menos";
	}

}

function maisConcerto(){
	var pontosConcerto=document.getElementById("pontosConcerto");
	var maisConcerto=document.getElementById("maisConcerto");
	var btnMaisConcerto=document.getElementById("btnMaisConcerto")

	if (pontosConcerto.style.display === "none") {
		pontosConcerto.style.display="inline";
		maisConcerto.style.display="none";
		btnMaisConcerto.innerHTML="Leia Mais";

	}else{
		pontosConcerto.style.display="none";
		maisConcerto.style.display="inline";
		btnMaisConcerto.innerHTML="Leia Menos";
	}
}


function maisGaleria(){
	var pontosGaleria=document.getElementById("pontosGaleria");
	var maisGaleria=document.getElementById("maisGaleria");
	var btnMaisGaleria=document.getElementById("btnMaisGaleria");

	if (pontosGaleria.style.display === "none") {
		pontosGaleria.style.display="inline";
		maisGaleria.style.display="none";
		btnMaisGaleria.innerHTML="Leia Mais";
		
	} else {
		pontosGaleria.style.display="none";
		maisGaleria.style.display="inline";
		btnMaisGaleria.innerHTML="Leia Menos";
	}
}


