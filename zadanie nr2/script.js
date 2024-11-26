$().ready( function(){
    $("#commentForm").validate({
        rules:{
            name:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true
            },
            

        },
        messages:{
            name:{
                required:"Podaj imię",
                minlength:"Podaj co najmniej 3 litery"
            },
            email:{
                required:"podaj adres email",
                email:"źle wpisany adres email"
            },
            comment:{
                required:"Powiedz nam co jest nie tak"
            }
        }
    })
})