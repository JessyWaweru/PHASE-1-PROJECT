


document.addEventListener('DOMContentLoaded',getStories())
function getStories(){
    fetch('https://binaryjazz.us/wp-json/genrenator/v1/story/200')
    .then(res=>res.json())
    .then(stories=>{
        const storyList=document.getElementById('story')
    stories.forEach(
        story=>{
            const elStories=document.getElementById('storyy')
            elStories.innerText=story
            storyList.appendChild(elStories)

            const likeButton=document.createElement('button')
            likeButton.innerHTML=`<button type='button'
                                   onclick=getElementById('storyy').style.color='red'>
                                   Like story!</button>`
            elStories.appendChild(likeButton)
        
        function likingButton(story){
        return story
        }
  
        likeButton.addEventListener('click', likingButton() )
        likingButton()
       
        const anotherStory=document.createElement('button')
            anotherStory.innerText=`Another Short Story`
            elStories.appendChild(anotherStory)
        
        function resonatingButton(){
            const form =document.createElement('form')
          form.innerHTML=`<form>
                           YOU RELATE?write how below:<br>
                           <input type='text' id ='text' name='text'>
                           <br><br>
                           <input type='submit' value='submit'>
                           </form>`
                           elStories.appendChild(form)
            form.addEventListener('submit',(e)=>{
            e.preventDefault()
             const text=form.querySelector('#text').value
            
            return text})                
                                 } 
             resonatingButton()
            anotherStory.addEventListener('click',()=>document.location.reload())
        }
    )     
    })
}

getStories()


