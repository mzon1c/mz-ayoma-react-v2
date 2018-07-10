import React, { Component } from 'react';
import './index.css';

class Contact extends Component {

    constructor(){
      super();
      this.state={count:0};

    }






    render(){

      return(

        <div >

        
          <h1>Kochi</h1>


          <iframe id="frame1" width="99.7%" height="300px" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15717.235392523677!2d76.2848094!3d9.9913267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7a2fa1f44f9181f1!2sAyoma+Classic!5e0!3m2!1sen!2sin!4v1531155128314" frameBorder="0"></iframe>
            <div>
                <br/>
                <h2>41/2493, 1st Floor Rasheed Building,<br/>Opp AV Residency, St Benedict Road,<br/> Ernakulam,Kochi, Kerala 682018</h2>
                
                <h3><a href="mailto:ayomaclassic@gmail.com">ayomaclassic@gmail.com</a></h3>
                
                <h3>Tel: <a href="tel:+91-484-2398373">+91-484-2398373</a></h3>
                <h3>Mob:<a href="tel:+91-9847404373"> +91-9847404373</a></h3>
                </div>
                <br/>
                <hr width="90%"/>
                
                <br/>
                <h1>Thiruvalla</h1>
                <iframe id="frame2" width="99.7%" height="300px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d737.248832991264!2d76.57329615289827!3d9.383019625883474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0624731a4b07b7%3A0x29edfb5432575c5e!2sCVP+Parliament+Square!5e0!3m2!1sen!2sin!4v1531156181728" frameBorder="0"></iframe>

                 <h2>Branch - 24G / CVP Parliament Square, Cross Jn. Thiruvalla</h2>

        </div>
      );


    }


}





export default Contact;
