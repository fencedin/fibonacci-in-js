describe('fibonacci', function() {

  it('returns the fibonacci number at the corresponding position 1', function(){
    fibonacci(1).should.equal(0);
  })

  it('returns the fibonacci number at the corresponding position 2', function(){
    fibonacci(2).should.equal(1);
  })

  it('returns the fibonacci number at the corresponding position 3', function(){
    fibonacci(3).should.equal(1);
  })

  it('returns the fibonacci number at the corresponding position 4', function(){
    fibonacci(4).should.equal(2);
  })
    
  it('returns the fibonacci number at the corresponding position 9', function(){
  fibonacci(9).should.equal(21);
})
});
