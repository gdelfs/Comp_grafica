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
	
	//Centro da esfera
	fill(255, 0, 0, 255);
	ellipse(centro, centro,tamanho_centro, tamanho_centro);
	
	//Criando a esfera
  	for(c=0;c<20;c++){	
    		raio= raio - 5;
    		for(b=0;b<Numero_pontos;b++){		
			fill(0, 255, 0, 255);
			ellipse(centro + raio*cos(a), centro + raio*sin(a), tamanho, tamanho);
			a=a+PI/20;
		}
  	}
}
