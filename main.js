$('#date-of-birth').datepicker({
    dateFormat: "dd-mm-yy"
})

$('#submit').click(function(){
    let user = new User;
    user.setName($('#user-name').val());
    user.setDate($('#date-of-birth').val());
    user.setAge($('#user-age').val());
    if(!user.isCorrect()){
        $('#user-name').val('');
        $('#date-of-birth').val('');
        $('#user-age').val('');
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
        this.age = +age;
    }
    setDate(date){
        this.date = date.trim();
    }
    isCorrect(){
        if(this.name != ''&& this.age != ''&& !isNaN(this.age) && this.date != ''  && (this.age^0) === this.age && this.checkDate(this.date)){
            return true
        }
        return false       
    }
    checkDate(date){
        let arr = date.split('-').map(elem => elem^0 === elem ? elem : null);
        if(arr.length == 3 && arr[0].length == 2 && arr[1].length == 2 && arr[2].length == 4){
            return true
        }
        return false
    }
}