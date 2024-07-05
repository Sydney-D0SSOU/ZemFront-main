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
    padding: '10px 20px',
    backgroundColor: '#FEEE90',
    color: '#022146',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    textAlign: 'center',
    margin: '10px 0',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%', // Make the button occupy full width
    maxWidth: '200px', // Optional: Limit the maximum width of the button
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
    textAlign: 'center', // Center align the text
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
    <div>
      <Navbar />
      <div className="relative">
        <img src={image1} alt="image1" className="w-full h-auto" style={{ maxHeight: '560px', objectFit: 'cover' }} />
        <div className="absolute top-0 right-0 p-4 flex flex-col items-end">
          <a style={buttonStyle} href="">FAIRE UNE COURSE</a>
          <a style={buttonStyle} href="">ENVOYER UN COLIS</a>
        </div>
      </div>
      <img src={image2} alt="image2" className="w-full h-auto" />
      <div className="relative">
        <img src={image3} alt="image3" className="w-full h-auto" style={{ height: '700px', objectFit: 'cover' }} />
        <div style={textOverlayStyle}>
          <p>J'ai un abonnement au mois pour me déplacer dans tout Cotonou.</p>
        </div>
        <div className="absolute top-0 right-0 p-4 flex flex-col items-end" style={{ top: '70%' }}>
          <a style={buttonStyle} href="/abon">OFFRE ABONNEMENT</a>
        </div>
      </div>
    
      <div className="relative">
        <div className="w-full h-32 flex items-center justify-center bg-[#022146] text-[3vh] text-[#FEEE90] font-black text-center">
          Inscrivez-vous pour <br />avoir un stand
        </div>
        <img src={image5} alt="image5" className="w-full h-auto" style={{ maxHeight: '500px', objectFit: 'cover' }} />
        <div className="w-full h-9 bg-[#FE904C] text-[#022146] font-black text-center" style={italicTextStyle}>
          <button onClick={downloadFile} className="bg-[#022146] text-[#FEEE90] py-2 px-4 rounded">Télécharger le dépliant</button>
        </div>
      </div>
    </div>
  );
}

export default Defile;
