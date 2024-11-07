const Parent={
    name:'Parent',
    greet: function(){
    console.log( "Hello my name is ",this.name );
    }
    };
    // child object
    const Child=Object.create(Parent);
    Child.name='Child';
    
    //Test inheritance
    Child.greet();
    Parent.greet();