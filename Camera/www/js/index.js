var pictureSource;
var destinationType;

var app = {
    // Application Constructor
    initialize: function() {
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
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
    },

    onPhotoDataSucess: function(imageData){
        var smallImage = document.getElementById('smallImage');
        smallImage.style.display = 'block';
        smallImage.src = "data:image/jpeg;base64," + imageData;
    },

    onPhotoURISuccess: function(imageURI){
        var largeImage = document.getElementById('largeimage');
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
        navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, {quality: 50, destinationType: destinationType.FILE_URI, SourceType: source})
    },

    onFail: function(message){
        alert('Falhou: ' + message);
    }

};

