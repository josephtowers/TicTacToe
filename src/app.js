var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ceros: [],
    cero:null,
    equis:null,
    size:null,
    turno:0,
    random: function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	},
    
    crearO: function(x,y,t){
        if(t=="X") pieza = new cc.Sprite(res.X_png);
        else if(t=="O") pieza = new cc.Sprite(res.O_png);
        pieza.setPosition(x,y );
        this.addChild(pieza, 1);
        console.log("Se creo un elemento del tipo " + t  +" en " + Math.floor(x) + "," + Math.floor(y));
},
    
    verificar: function(event)
    {
        var juego = event.getCurrentTarget();
        var arr = juego.ceros;
        console.log(arr);
        if(arr[0]==arr[1] && arr[1]==arr[2])
            return arr[0];
        else if(arr[3]==arr[4] && arr[4]==arr[5])
            return arr[3];
        else if(arr[6]==arr[7] && arr[7]==arr[8])
            return arr[6];
        else if(arr[0]==arr[3] && arr[3]==arr[6])
            return arr[0];
        else if(arr[1]==arr[4] && arr[4]==arr[7])
            return arr[1];
        else if(arr[2]==arr[5] && arr[5]==arr[8])
            return arr[2];
        else if(arr[0]==arr[4] && arr[4]==arr[8])
            return arr[0];
        else if(arr[6]==arr[4] && arr[4]==arr[2])
            return arr[2];
        return 0;
    },
  moverO: function(location, event)
    {
        var juego = event.getCurrentTarget();
		var letoca = "";
        if(juego.turno % 2 == 0)
            {
                letoca = "O";
            }
        else letoca = "X";
			var ubicacion = location.getLocation();
            var x = ubicacion.x;
            var y = ubicacion.y;
        if(x >= 342 && x < 433 && y >= 323 && y < 426 && juego.ceros[0]==null)
            {
                juego.crearO(385,376,letoca);
                juego.ceros[0]=letoca;
                juego.turno++;
            }
        else if(x >= 433 && x < 526 && y >= 323 && y < 426 && juego.ceros[1]==null)
            {
                juego.crearO(481,376,letoca);
                juego.ceros[1]=letoca;
                juego.turno++;
            }
        else if(x >= 526 && x < 615 && y >= 323 && y < 426 && juego.ceros[2]==null)
            {
                juego.crearO(580,376,letoca);
                juego.ceros[2]=letoca;
                juego.turno++;
            }
        else if(x >= 342 && x < 433 && y >= 221 && y < 323 && juego.ceros[3]==null)
            {
                juego.crearO(385,266,letoca);
                juego.ceros[3]=letoca;
                juego.turno++;
            }
        else if(x >= 433 && x < 526 && y >= 221 && y < 323 && juego.ceros[4]==null)
            {
                juego.crearO(481,266,letoca);
                juego.ceros[4]=letoca;
                juego.turno++;
            }
        else if(x >= 526 && x < 615 && y >= 221 && y < 323 && juego.ceros[5]==null)
            {
                juego.crearO(580,266,letoca);
                juego.ceros[5]=letoca;
                juego.turno++;
            }
        else if(x >= 342 && x < 433 && y >= 116 && y < 221 && juego.ceros[6]==null)
            {
                juego.crearO(385,168,letoca);
                juego.ceros[6]=letoca;
                juego.turno++;
            }
        else if(x >= 433 && x < 526 && y >= 116 && y < 221 && juego.ceros[7]==null)
            {
                juego.crearO(481,168,letoca);
                juego.ceros[7]=letoca;
                juego.turno++;
            }
        else if(x >= 526 && x < 615 && y >= 116 && y < 221 && juego.ceros[8]==null)
            {
                juego.crearO(580,168,letoca);
                juego.ceros[8]=letoca;
                juego.turno++;
            }
       
        var ganador = juego.verificar(event);
        if(ganador==="X") {
            alert("Ha ganado el jugador X");
            
            }
        if(ganador==="O") {
            alert("Ha ganado el jugador O");
            
            }
        
    },
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("TicTacToe V1", "Arial", 38);
        // position the label on the center of the screen
        var currentPlayer = new cc.LabelTTF("Weo", "Consolas", 20);
        this.addChild(currentPlayer, 5);
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        currentPlayer.x = helloLabel.x;
        currentPlayer.y = helloLabel.y - 50;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.tablero_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        
        this.addChild(this.sprite, 0);
        cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			onTouchBegan: this.moverO
			
		}, this);
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
