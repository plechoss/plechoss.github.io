var database = firebase.database().ref().child('algs-ohf2l');
database.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';

        snapshot.forEach(function(data){
            var alg = data.val().alg;
            var image = data.val().image;
            content += '<div class="center icon-block">';
            content += '<img src="' + image + '" alt="" class="center-responsive-img">';//image
            content += '<h6 class="center">' + alg + '</h6>'; //algorithm
            content += '</div>';
        });

        $('#algorithms').append(content);
    }
});
