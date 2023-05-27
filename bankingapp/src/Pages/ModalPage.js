import Modal from "../Components/Modal";
import ButtonCard from "../Components/ButtonCard";
import { useState } from "react";

function ModalPage(){
const [showModal,setShowModal]= useState(false);

const handleClick=() => {setShowModal(true)};

const handleClose=() =>{
   setShowModal(false) ;
};
const actionBar=<div>
   <ButtonCard onClick={handleClose} primary>Pay</ButtonCard> 
</div> 
const modal=<Modal onClose={handleClose} actionBar={actionBar }> 
<p>
   Payming method 
</p>

</Modal>
return(
    <div>
        <ButtonCard onClick={handleClick}primary >Open Modal
        </ButtonCard>
       {showModal && modal}
 
        </div>
);

}

export default ModalPage; 