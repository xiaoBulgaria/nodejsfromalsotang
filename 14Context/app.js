/*
function pet(words){
   this.words = words
   console.log(this.words)
   console.log(this)
}
 pet('...')

 function pet(words){
   this.words = words
   console.log(this.words)
   console.log(this === global)
}
 pet('...')
  
   function pet(words){
   this.words = words

   this.speak = function(){
      console.log(this.words)
      console.log(this)
   }
}
 var cat = new pet('miao')
 cat.speak()
 
 
 var pet = {
    words : '...',
	speak : function(say){
	 console.log(say+':'+this.words)
	}
 }
 //pet.speak('speak')
 
 
 var dog = {
    words : 'wang'}
 
 
 pet.speak.call(dog,'speak')
 */
  function Pet(words){
   this.words = words
   this.speak =function(){
     console.log(this.words)
  }
}
 
 function Dog (words){
 Pet.call(this,words)
 }
 
 var dog = new Dog('wang')
 dog.speak()
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 