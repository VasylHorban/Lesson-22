$('#date-of-birth').datepicker({
    dateFormat: "dd-mm-yy"
})

$('#submit').click(function(){
    let user = new User;
    user.setName($('#user-name').val());
    user.setDate($('#date-of-birth').val());
    user.setAge($('#user-age').val());
    console.log(user.date.length)
    if(!user.isCorrect()){
        $('form').effect('shake',{},3000);
        return false;
    }

    $('form').hide('blind',{},3000);
});

class User{
    constructor(){}
    setName(name){
        this.name = name.trim().toLowerCase();
    }
    setAge(age){
        this.age = +age.trim();
    }
    setDate(date){
        this.date = date.trim();
    }
    isCorrect(){
        if(this.name != ''&& this.age != ''&& !isNaN(this.age) && this.date != '' && this.date && (this.age^0) === 0){
            return true
        }
        return false;
    }
}