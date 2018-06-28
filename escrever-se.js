var mqtt=require('mqtt');
var cliente=mqtt.connect('mqtt://broker.mqttdashboard.com',{clientId:'par-xyz-001-sub'});

cliente.on('connect',function(){
    cliente.subscribe('pariot/temperature');
    console.log('Conectou');
});

cliente.on('message',function(topic,message,pacote){
    console.log(message.toString());
    var temperatura=parseInt(message.toString());
    if(temperatura>40){
		console.log("Temperatura elevada");
	}
});
