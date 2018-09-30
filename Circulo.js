function setup() {
  createCanvas(400, 400);
}

function draw() {
	Numero_pontos = 200;
	tamanho =3;
	tamanho_centro = 8;
  centro = 200;
	raio = 100;
	a=0;
	background(140);
	
	//Centro do círculo
	fill(255, 0, 0, 255);
	ellipse(centro, centro,tamanho_centro, tamanho_centro);
	
	//Criando o círculo
	for(b=0;b<Numero_pontos;b++){		
		fill(255, 255, 0, 255);
		ellipse(centro + raio*cos(a), centro + raio*sin(a), tamanho, tamanho);
		a=a+PI/50;
	}
}
