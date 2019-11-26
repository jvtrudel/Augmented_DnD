var tileWidthPixel;
var tileHeightPixel;
var nbTileWidth;
var nbTileHeight;
var ctx= null;
var gameMap=[];



function loadMap(){
    var file = document.getElementById("mapFile").files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            gameMap=JSON.parse(evt.target.result).map;
            tileWidthPixel=JSON.parse(evt.target.result).tileWidthPixel;
            tileHeightPixel=JSON.parse(evt.target.result).tileHeightPixel;
            nbTileWidth=JSON.parse(evt.target.result).nbTileWidth;
            nbTileHeight=JSON.parse(evt.target.result).nbTileHeight;
            ctx.canvas.width=nbTileWidth*tileWidthPixel;
            ctx.canvas.height=nbTileHeight*tileHeightPixel;
            requestAnimationFrame(drawGame);
        };
        reader.onerror = function (evt) {
            document.getElementById("fileContents").innerHTML = "error reading file";
        };
    }
}

function creerMap(){
    tileWidthPixel=document.getElementById("tileWidthPixel").value;
    tileHeightPixel=document.getElementById("tileHeightPixel").value;
    nbTileWidth=document.getElementById("nbTileWidth").value;
    nbTileHeight=document.getElementById("nbTileHeight").value;
    ctx=document.getElementById('game').getContext('2d');
    ctx.canvas.width=nbTileWidth*tileWidthPixel;
    ctx.canvas.height=nbTileHeight*tileHeightPixel;
    for(var y=0; y<nbTileHeight;y++){
        for(var x=0;x<nbTileWidth;x++){
            gameMap[(y*nbTileWidth)+x]=1;
        }

    }
    requestAnimationFrame(drawGame);
}

window.onload=function(){
    ctx=document.getElementById('game').getContext('2d');
    requestAnimationFrame(drawGame);
    ctx.font='bold 10pt sans-serif';
};

function drawGame(){
    if(ctx==null){return;}
    for(var y=0; y<nbTileHeight;y++){
        for(var x=0;x<nbTileWidth;x++){
            switch(gameMap[((y*nbTileWidth)+x)]){
            case 0://mur
                ctx.fillStyle="#999999";
                ctx.strokeStyle="#000000";
                break;
            case 1://marchable
                ctx.fillStyle="#eeeeee";
                ctx.strokeStyle="#000000";
                break;
            case 2://goblin
                ctx.fillStyle="#00ff00";
                ctx.strokeStyle="#000000";
                break;
            case 3://hero 1
                ctx.fillStyle="#ff5622";
                ctx.strokeStyle="#000000";
                break;
            case 4://hero 2
                ctx.fillStyle="#ffc524";
                ctx.strokeStyle="#000000";
                break;
            case 5://hero 3
                ctx.fillStyle="#ff33d3";
                ctx.strokeStyle="#000000";
                break;
            case 6://objets
                ctx.fillStyle="#823528";
                ctx.strokeStyle="#000000";
                break;
            }
            ctx.fillRect(x*tileWidthPixel, y*tileHeightPixel, tileWidthPixel, tileHeightPixel);
            ctx.globalAlpha=0.2;
            ctx.strokeRect(x*tileWidthPixel, y*tileHeightPixel, tileWidthPixel, tileHeightPixel);
            ctx.globalAlpha=1;
        }
    }
    ctx.fillStyle="#ff0000";
    requestAnimationFrame(drawGame);
}
