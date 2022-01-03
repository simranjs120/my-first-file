var nodemailer= require('nodemiler');
var transport= nodemailer.createtransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'simranjs5041@gmail.com',
        password:'Ssmotasingh1%'
    }
});
var mailoptions={
    from:'simranjs5041@gmail.com',
    to:'simranjs5041@gmail.com',
    subject:'Hii',
    text:'Hi0'
}
transport.sendmail(mailoptions, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log("Email has been sent !",info.response);
    }
})