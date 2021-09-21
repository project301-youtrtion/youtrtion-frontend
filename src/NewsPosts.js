import React from "react";
import './News.css'

class NewsPosts extends React.Component{
    render(){
        return(
        <div>
            
            <div class="w3-card-w3-margin">
             <div class="w3-container-w3-padding">
              <h4>Popular Posts</h4>
             </div>
             <ul class="w3-ul w3-hoverable w3-white"/>
               <li class="w3-padding-16"/>
              
              <span class="w3-large">Lorem</span><br/>
              <span>Sed mattis nunc</span>
            </div>
            <div class="w3-card w3-margin">
        <div class="w3-container w3-padding">
      <h4>Tags</h4>
     </div>
      <div class="w3-container w3-white">
      <p/><span class="w3-tag w3-black w3-margin-bottom">Travel</span>
    
    </div>
    
     </div>
        </div> 
        
        
   
        )
    }
}

export default NewsPosts