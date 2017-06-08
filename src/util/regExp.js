var emailRegExp = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
var phoneRegExp = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
//var passwordRegExp = /ddd/;
export default{
    emailVail:(email)=>{
        return emailRegExp.test(email);
    },
    phoneVail:(phone)=>{
        return phoneRegExp.test(phone);
    },
    passwordVail:(phone)=>{
        return true;
    }
}