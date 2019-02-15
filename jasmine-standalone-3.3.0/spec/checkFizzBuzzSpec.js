it('should return "1" for 1',()=>{
    expect( checkFizzBuzz(1) ).toEqual('1');
})

it('should return "2" for 2',()=>{
    expect( checkFizzBuzz(2) ).toEqual('2');
})

it('should return "3" for 3',()=>{
    expect( checkFizzBuzz(3) ).toEqual('fizz');
})

it('should return "4" for 4',()=>{
    expect( checkFizzBuzz(4) ).toEqual('4');
})

it('should return "5" for 5',()=>{
    expect( checkFizzBuzz(5) ).toEqual('buzz');
})

it('should return "15" for 15',()=>{
    expect( checkFizzBuzz(15) ).toEqual('buzz');
})