import React, {useState} from "react";
import './disease-details.css';
import './popup.css';


export default function LiverPatient() {

  const [enteredAge,setEnteredAge] = useState('');
  const [enteredAlamineaminotransferase,setEnteredAlamineaminotransferase] = useState('');
  const [enteredAlbumin,setEnteredAlbumin] = useState('');
  const [enteredAmbuminandglobulinratio,setEnteredAmbuminandglobulinratio] = useState('');
  const [enteredAspartateaminotransferase,setEnteredAspartateaminotransferase] = useState('');
  const [enteredBilirubin,setEnteredBilirubin] = useState('');
  const [enteredDirectbilirubin,setEnteredDirectbilirubin] = useState('');

  const [enteredGender,setEnteredGender] = useState('');
  const [enteredTotalprotiens,setEnteredTotalporteins] = useState('');
  const [enteredPhospotase,setEnteredPhospotase] = useState('');
 
  const [output,setOutput] = useState('');

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
}; 

const alamineaminotransferaseChangeHandler = (event) => {
  setEnteredAlamineaminotransferase(event.target.value);
}; 
const genderChangeHandler = (event) => {
setEnteredGender(event.target.value);
}; 
const belirubinChangeHandler = (event) => {
  setEnteredBilirubin(event.target.value);
}; 
const directbilirubinChangeHandler = (event) => {
  setEnteredDirectbilirubin(event.target.value);
}; 
const phospotaseChangeHandler = (event) => {
  setEnteredPhospotase(event.target.value);
}; 
const aspartateaminotransferaseChangeHandler = (event) => {
  setEnteredAspartateaminotransferase(event.target.value);
}; 
const totalprotiensChangeHandler = (event) => {
  setEnteredTotalporteins(event.target.value);
}; 
const albuminChangeHandler = (event) => {
  setEnteredAlbumin(event.target.value);
}; 
const ambuminandglobulinratioChangeHandler = (event) => {
  setEnteredAmbuminandglobulinratio(event.target.value);
}; 



  function handleSubmit(e) {

    e.preventDefault();
    const submittingValue = {

    'Age' :    enteredAge,
    "Alamine_Aminotransferase":  enteredAlamineaminotransferase,
    "Albumin": enteredAlbumin,
    "Albumin_and_Globulin_Ratio": enteredAmbuminandglobulinratio,
    "Aspartate_Aminotransferase": enteredAspartateaminotransferase,
    "Total_Bilirubin": enteredBilirubin,
    "Direct_Bilirubin": enteredDirectbilirubin,

    'Gender': enteredGender,
    "Total_Protiens": enteredTotalprotiens,
    "Alkaline_Phosphotase": enteredPhospotase
    };

    
   
    setEnteredAge('');
    setEnteredAlamineaminotransferase('');
    setEnteredAlbumin('');
    setEnteredAmbuminandglobulinratio('');
    setEnteredAspartateaminotransferase('');
    setEnteredBilirubin('');
    setEnteredDirectbilirubin('');
    setEnteredGender('');
    setEnteredTotalporteins('');
    setEnteredPhospotase('');

    

    function displayPopUp() {
      
      const popup = document.getElementById('mypopup');
      popup.style.display = "block";
    }
    
    fetch('https://techno-vedha.herokuapp.com/liver',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        //"Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(submittingValue),
    }).then(res => res.text())         
    .then(text => ( console.log(text), setOutput(text), displayPopUp() )
    ).catch((err) => {
      console.log(err);
    });

    // fetch('https://techno-vedha.herokuapp.com/liver',{
    //   method: 'GET',
    //   headers: {
    //     'Content-type': 'application/json',
    //     'Accept': 'application/json'
    //   },
    // }).then(res => res.text())         
    // .then(text => setOutput(text),
    // displayPopUp()
    // ).catch((err) => {
    //   console.log(err);
    // });
  }


  // for result popup window


  function closePopUp(e) {
    e.preventDefault();
    const popup = document.getElementById('mypopup');
    popup.style.display = "none";
  }
  window.onclick = function(event) {
    const popup = document.getElementById('mypopup');
    if (event.target === popup) {
      popup.style.display = "none";
    }
  }


  //Validation
function genderValidation() {
  const gender = document.getElementById('gender');

  gender.addEventListener('input', function() {
    if(gender.validity.patternMismatch) {
      gender.setCustomValidity("Enter For Male: M or m and for Female: F or f ");
    } else {
      gender.setCustomValidity("");
    }
  });
}



    return (
        <div>
        <br />
        <br />
        <br />
        <div class="form">
        <form onSubmit={handleSubmit}>
  <label>
  Gender:
    <input type="text" id="gender" onInput={genderValidation} required pattern="[f]|[F]|[m]|[M]" name="Gender" value={enteredGender} onChange={genderChangeHandler} />
  </label>
  <br />
  <label>
  AGE:
    <input type="number" name="Age" required min="1" max="100" value={enteredAge} onChange={ageChangeHandler}/>
  </label>
  <br />
  <label>
  Total_Bilirubin:
    <input type="number" name="Totalbilirubin" required step="0.1"value={enteredBilirubin} onChange={belirubinChangeHandler}/>
  </label>
  <br />
  <label>
  Direct_Bilirubin:
    <input type="number" name="Directbilirubin"required step="0.1" value={enteredDirectbilirubin} onChange={directbilirubinChangeHandler}/>
  </label>
  <br />
  <label>
  Alkaline_Phosphotase:
    <input type="number" name="Alkalinephostase" required step="0.1"value={enteredPhospotase} onChange={phospotaseChangeHandler}/>
  </label>
  <br />
  <label>
  Alamine_Aminotransferase:
    <input type="number" name="Alamineaminotransferase"required step="0.1" value={enteredAlamineaminotransferase} onChange={alamineaminotransferaseChangeHandler}/>
  </label>
  <br />
  <label>
  Aspartate_Aminotransferase:
    <input type="number" name="Aspartateaminotransferase"required step="0.1" value={enteredAspartateaminotransferase} onChange={aspartateaminotransferaseChangeHandler}/>
  </label>
  <br />
  <label>
  Total_Protiens:
    <input type="number" name="Totalprotiens" required step="0.1"value={enteredTotalprotiens} onChange={totalprotiensChangeHandler}/>
  </label>
  <br />
  <label>
  Albumin:
    <input type="number" name="Albumin"required step="0.1" value={enteredAlbumin} onChange={albuminChangeHandler}/>
  </label>
  <br />
  <label>
  Albumin_and_Globulin_Ratio:
    <input type="number" name="Ambuminandglobulinratio" required step="0.1"value={enteredAmbuminandglobulinratio} onChange={ambuminandglobulinratioChangeHandler}/>
  </label>
  <br />
  
 
 
  <input id="disease-submit" type="submit" value="Submit" />
      {/* <p>{output}</p> */}

      <div id="mypopup" class="popup-container">


        <div class="popup-content">
          <span onClick={closePopUp} class="close-btn">&times;</span>
          <p>There is <strong> {output} </strong> chance of you having this disease.</p>
        </div>

      </div>
</form>

</div>
 </div>
    );

}