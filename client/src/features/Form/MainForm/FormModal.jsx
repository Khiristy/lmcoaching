import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
// import MultiStepForm from './MultiStepForm';
import bckImg from "/media/form/bck_img.png";
import './formModal.scss';

function FormModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Ouvrir la modale
      </button>

      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            {/* Fond en plein écran avec une image */}
            <motion.div 
              className="modal-backdrop"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              
            />
            {/* Contenu de la modale */}
            
            <div className="modal-container">
            <motion.img className='modalImg' src= {bckImg} />
              <DialogPanel 
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="dialog-panel"
              >
                {/* <MultiStepForm /> */}
                <button onClick={() => setIsOpen(false)} className="close-btn">
                  Fermer
                </button>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}

export default FormModal;

