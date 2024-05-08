import React from 'react';
import image1 from './Images/s1.jpg';
import image2 from './Images/9.jpg';
import image3 from './Images/2.jpg';
import image4 from './Images/2.jpg';
import image5 from './Images/5.jpg';
import  Navbar from './Navbar'
import fichierATelecharger from './Images/2.pdf';  // Your PDF file import

function Defile() {
  const image1Style = {
    width: '100%',
    height: '560px',
    objectFit: 'cover',
  };

  const image1Style1 = {
    width: '100%',
    height: '560px',
    objectFit: 'cover',
  };

  const image3Style = {
    transform: 'scaleX(-1)',
    width: '100%',
    height: '560px',
    objectFit: 'cover',
  };

  const image3Style1 = {
    transform: 'scaleX(-1)',
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  };

  const buttonStyle = {
    position: 'absolute',
    left: '50%',
    top: '70%',
    transform: 'translate(-50%, -50%)',
  };
  
  const textOverlayStyle = {
    position: 'absolute',
    left: '20px',
    top: '20px',
    maxWidth: '40%',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
  };

  const image4Style = {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
  };

  const image5Style = {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
  };

  const italicTextStyle = {
    fontStyle: 'italic', // Apply italic style to the text
    textAlign: 'right',   // Align text to the left
  };

  const downloadFile = () => {
    const fileUrl = fichierATelecharger;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fichierATelecharger; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div className='gap-10'>
      <Navbar/>
      <div className="relative">
        <a href="/">
        <img src={image1} alt="image1" className='w-full' style={window.innerWidth > 768 ? image1Style : image1Style1} />
        </a>
        <div className="absolute top-0 flex flex-col items-center justify-center h-full right-10">
          <a className="w-40 h-16 p-2 text-xl font-sans font-black mb-9 bg-[#FEEE90] text-[#022146] hover:bg-[#87acec]" href="/COURSE">FAIRE UNE COURSE</a>
          <a className="w-40 h-16 p-2 text-xl font-sans font-black bg-[#FEEE90] text-[#022146] hover:bg-[#87acec]" href="/DELIVER">ENVOYER UN COLIS</a>
        </div>
      </div>
      <div className='w-full h-5 bg-[#FEEE90]'></div>
      <div>
        <img src={image2} alt="image2" className='w-full' />
      </div>
      <div className='w-full h-5 bg-[#FEEE90]'></div>
      <div className='relative'>
        <img src={image3} alt="image3" className='w-full' style={window.innerWidth > 768 ? image3Style : image3Style1} />
        <div style={textOverlayStyle}>
          <p>
            BONJOUR, JE SUIS E.<br />
            J'ai un abonnement au mois pour me déplacer dans tout Cotonou.
          </p>
        </div>
        <div>
        <a style={buttonStyle} className="w-40 h-16 p-2 text-xl font-sans font-black bg-[#FEEE90] text-[#022146] hover:bg-[#87acec]" href="/abon">OFFRE<br />ABONNEMENT</a>
         </div>
      </div>

      <div className='w-full h-5 bg-[#FEEE90] '></div>
      <div className='relative'>
        <div className='w-full h-32 flex text-center bg-[#FE904C] text-[7vh] text-[#022146] font-black'>
          <div className='absolute left-7'>Inscrivez vous pour <br />devenir transporteur</div>
        </div>
        <img src={image4} alt="image4" className='w-full' style={window.innerWidth > 768 ? image4Style : null} />
        <div className='w-full h-9 bg-[#fe904c] text-[3vh] text-[#022146] font-black' style={italicTextStyle}>
          <div className='absolute right-4'>
              <button onClick={downloadFile}>Télécharger le dépliant</button>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='w-full h-32 relative flex bg-[#022146] text-[7vh] text-[#FEEE90] font-black'>
          <div className='absolute left-7'>Inscrivez vous pour <br />avoir un stand</div>
        </div>
        <img src={image5} alt="image5" className='w-full' style={window.innerWidth > 768 ? image5Style : null} />
        <div className='w-full h-9 bg-[#fe904c] text-[3vh] text-[#022146] font-black' style={italicTextStyle}>
          <div className='absolute right-4'>
              <button onClick={downloadFile}>Télécharger le dépliant</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Defile;