var pictureSource;
var destinationType;

var app = {
    // Application Constructor
    initialize: function() {

        alert('initialize');
        this.bindEvents();
    },

    bindEvents: function(){
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {

        alert('Iniciou');
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;


        console.log(destinationType);
    },

    onPhotoDataSuccess: function(imageData){
        var smallImage = document.getElementById('smallImage');
        //console.log(smallImage);
        alert('sucess');
        smallImage.style.display = 'block';
        smallImage.src = "data:image/jpeg;base64," + imageData;
    },

    onPhotoURISuccess: function(imageURI){
        var largeImage = document.getElementById('largeImage');
        largeImage.style.display = 'block';
        largeImage.src = imageURI;
    },

    // Update DOM on a Received Event
    capturePhoto: function(){
        navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, { quality: 50, destinationType: destinationType.DATA_URL });
    },

    capturePhotoEdit: function(){
       navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, { quality: 20, allowEdit: true, destinationType: destinationType.DATA_URL });
    },

    getPhoto: function(source){
        navigator.camera.getPicture(this.onPhotoURISuccess, this.onFail, {quality: 50, destinationType: destinationType.FILE_URI, sourceType: source})
    },

    onFail: function(message){
        alert('Falhou: ' + message);
    }

};

