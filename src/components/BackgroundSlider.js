import React from 'react';
import image1 from './Images/s1.jpg';
import image2 from './Images/9.jpg';
import image3 from './Images/2.jpg';
import image4 from './Images/2.jpg';
import image5 from './Images/5.jpg';
import Navbar from './Navbar';
import fichierATelecharger from './Images/2.pdf'; // Your PDF file import

function Defile() {
  const buttonStyle = {
    position: 'absolute',
    left: '50%',
    top: '70%',
    transform: 'translate(-50%, -50%)',
    padding: '10px 20px',
  };

  const textOverlayStyle = {
    position: 'absolute',
    left: '20px',
    top: '20px',
    maxWidth: '80%',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
  };

  const italicTextStyle = {
    fontStyle: 'italic',
    textAlign: 'right',
    fontSize: '1rem',
  };

  const downloadFile = () => {
    const fileUrl = fichierATelecharger;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'depliant.pdf'; // Specify a file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='relative'>
      <Navbar />
      <div className='relative'>
        <img src={image1} alt="image1" className='w-full h-auto' style={{ height: 'auto', maxHeight: '560px', objectFit: 'cover' }} />
        <div className="absolute top-0 right-0 p-4 flex flex-col items-center">
          <a className="w-full max-w-xs h-16 p-2 text-xl font-sans font-black mb-2 bg-[#FEEE90] text-[#022146] hover:bg-[#87acec] text-center" href="/COURSE">FAIRE UNE COURSE</a>
          <a className="w-full max-w-xs h-16 p-2 text-xl font-sans font-black bg-[#FEEE90] text-[#022146] hover:bg-[#87acec] text-center" href="/DELIVER">ENVOYER UN COLIS</a>
        </div>
      </div>
      <div className='w-full h-5 bg-[#FEEE90]'></div>
      <div>
        <img src={image2} alt="image2" className='w-full h-auto' />
      </div>
      <div className='w-full h-5 bg-[#FEEE90]'></div>
      <div className='relative'>
        <img src={image3} alt="image3" className='w-full h-auto' style={{ height: 'auto', maxHeight: '560px', objectFit: 'cover' }} />
        <div style={textOverlayStyle}>
          <p>
            BONJOUR, JE SUIS E.<br />
            J'ai un abonnement au mois pour me déplacer dans tout Cotonou.
          </p>
        </div>
        <div style={buttonStyle}>
          <a className="w-40 h-16 p-2 text-xl font-sans font-black bg-[#FEEE90] text-[#022146] hover:bg-[#87acec] text-center" href="/abon">OFFRE<br />ABONNEMENT</a>
        </div>
      </div>
      <div className='w-full h-5 bg-[#FEEE90]'></div>
      <div className='relative'>
        <div className='w-full h-32 flex items-center justify-center bg-[#FE904C] text-[3vh] text-[#022146] font-black'>
          <div className='text-center'>
            Inscrivez-vous pour <br />devenir transporteur
          </div>
        </div>
        <img src={image4} alt="image4" className='w-full h-auto' style={{ height: 'auto', maxHeight: '500px', objectFit: 'cover' }} />
        <div className='w-full h-9 bg-[#FE904C] text-[#022146] font-black' style={italicTextStyle}>
          <div className='text-center'>
            <button onClick={downloadFile} className="bg-[#022146] text-[#FEEE90] py-2 px-4 rounded">Télécharger le dépliant</button>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='w-full h-32 flex items-center justify-center bg-[#022146] text-[3vh] text-[#FEEE90] font-black'>
          <div className='text-center'>
            Inscrivez-vous pour <br />avoir un stand
          </div>
        </div>
        <img src={image5} alt="image5" className='w-full h-auto' style={{ height: 'auto', maxHeight: '500px', objectFit: 'cover' }} />
        <div className='w-full h-9 bg-[#FE904C] text-[#022146] font-black' style={italicTextStyle}>
          <div className='text-center'>
            <button onClick={downloadFile} className="bg-[#022146] text-[#FEEE90] py-2 px-4 rounded">Télécharger le dépliant</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Defile;
