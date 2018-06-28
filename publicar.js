var mqtt=require('mqtt');
var cliente=mqtt.connect('mqtt://broker.mqttdashboard.com',{clientId:'par-xyz-001-pub'});//Troque a numeração para igual ao do seu raspberry

cliente.on('connect',function(){
    var temp=20;
    setInterval(function(){
        cliente.publish("pariot/temperature",temp.toString(),function(error){
				if(error)
					console.log(error);
				else
					console.log("Enviou corretamente - "+temp.toString());
			});
        temp++;
    },5000);
});



