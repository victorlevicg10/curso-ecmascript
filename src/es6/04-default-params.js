function newUser (name,age,country){
    var name  =name || 'Oscar';
    var age=age || 31;
    var country = country || 'PE';

    console.log(name,age,country);
}


newUser();
newUser('David',15,'CO');

function newAdmin(name='Oscar',age=25,country='CL'){
    console.log(name,age,country);
}

newAdmin();
newAdmin('Ana',28,'PE');

