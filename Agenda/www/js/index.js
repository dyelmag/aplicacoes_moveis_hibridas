function errorHandler(e){
    console.log(e);
}

function gotContacts(contacts){
    var list = $("#contact-list").append('<ul></ul>').find('ul');
    $.each(contacts, function(index, value){
        if(value.displayName && value.phoneNumbers){
            if(value.photos){
                list.append('<li>' + value.displayName + ' - ' + value.phoneNumbers[0].value + '<img src"' + value.photos[0].value + '">' + '</li>');
            }
            else{
                list.append('<li>' + value.displayName + ' - ' + value.phoneNumbers[0].value + '</li>');
            }
        }
    });
}

var app = {
    initialize: function(){
        this.bindEvents();
    },

    bindEvents: function(){
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function(){
        navigator.contacts.find([navigator.contacts.fieldType.displayName], gotContacts, errorHandler);
    }
};