import './App.css';
import { FaTelegramPlane } from "react-icons/fa";
import { FaWallet, FaXTwitter } from 'react-icons/fa6';
import { motion } from "framer-motion";
import dex from './dex.png';
import logo from './logo.svg';
import wt from './wt.png';
import standee from './standee.png'
import logotext from './logotext.png';
import sticker from './sticke.png';
import bg2 from './background2.png';
import bot from './standee.png'
function Home() {


  const copyText = () => {
    var text = document.getElementById("ca").innerText;

    // Create a temporary textarea element
    var textarea = document.createElement("textarea");

    // Set the text content to the paragraph text
    textarea.value = text.replace("COPY CONTRACT ADDRESS", "0xed4504e791e1dad7bf93b41e089b4733c27f35fde505693e18186c2ba8e2e14b::suib::SUIB");

    console.log(textarea.value);

    // Append the textarea to the body
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Alert the user that the text has been copied
    alert("$PABST CA copied.");
  }

  const marqueeVariants = {
    animate: {
      x: [0, -1250],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="home">

      <div className='topHeader'>
        <a className='logs2' href="https://t.me/SUIBAINU_BOT" target='_blank' rel="noreferrer">
          <img src={bot} className='dex2' alt='dex' />
        </a>
        <div className='btnLine'><a href="https://bot.suibacoin.com/" target="_blank" rel="noreferrer">READ DOCS</a></div>
      </div>


      <div className="section land hero texture">
        <div className='left'>

          <div className='ltextcont2'>
            {/* <h1>THE ADVENTUROUS MASCOT</h1> */}

            {/* 
            <img src={logo} alt='hello' className='logo' /> */}

            <img src={logotext} alt='hello' className='logo2' />

            <h1 className='sText'>The #1 <span className='sText light'>Memecoin</span> and <span className='sText light'>Trading Bot</span> on Sui</h1>



            <div className='buttonsH'>
              <a className='logs' href="https://t.me/SuibaPortal" target='_blank' rel="noreferrer">
                <FaTelegramPlane size={25} color='black' />
              </a>

              <a className='logs' href="https://x.com/suibaonsui" target='_blank' rel="noreferrer">
                <FaXTwitter size={25} color='black' />

              </a>
              <a className='logs' href="https://dexscreener.com/sui/0xe057718861803021cb3b40ec1514b37c8f1fa36636b2dcb9de01e16009db121c" target='_blank' rel="noreferrer">
                <img src={dex} className='dex' alt='dex' />
              </a>
              <div className='btnBig'><a href="https://dex.bluemove.net/swap/0x2::sui::SUI/0xed4504e791e1dad7bf93b41e089b4733c27f35fde505693e18186c2ba8e2e14b::suib::SUIB" target="_blank" rel="noreferrer">BUY NOW</a></div>
            </div>
          </div>

        </div>



      </div>



      <div className="section land test">
        <div className='diagonal'></div>

        <div className='left'>

          <div className='ltextcont2' >



            <div className='aboutcontainer'>

              <h1 className='sText'>The 1st <span className='sText light'>Telegram Bot</span> on Sui.  <span className='sText light'>Seamless</span> Experience, <span className='sText light'>Secure</span> Fundings, holder Privileges, and <span className='sText light'>Giga Gains</span>.</h1>
              <img src={standee} alt="hello" style={{ height: "25rem", width: "auto" }} />

            </div>




          </div>

        </div>


        <div className='marquee-cont'>

          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
            <h1>NOT  JUST A BLUE DOG. THE #1 TRADING BOT IN SUI.</h1>
          </motion.div>


        </div>
      </div >

      <div className="section land test">

        <div className='left'>

          <div className='ltextcont2' >

            <div className='aboutcontainer'>
              <img src={sticker} alt="hello" style={{ height: "23rem", width: "auto" }} />
              <h1 className='sText'>Join the Community.<span className='sText light'> Ride the SUINAMI</span> with your liquid companion, SUIBA.</h1>


            </div>




          </div>

        </div>



      </div >





      <div className="section land texture">

        <img src={bg2} alt="hello" className='lion' style={{ transform: "scaleX(-1)" }} />
        <div className='left'>

          <div className='ltextcont2' >

            <div className='aboutcontainer' style={{ textAlign: "center !important" }}>
              <h1 className='sText'>You are very <span className='sText light'>Early</span>. The best is <span className='sText light'>yet to come.</span> Be part of the SUIBA<span className='sText light'> community</span>.</h1>


            </div>
            <div className='radca' onClick={copyText}>
              <p className='ca' id='ca'>COPY CONTRACT ADDRESS</p>

            </div>




          </div>

        </div>



      </div >



      <div className="section land" >

        <div className='centercolumn'>
          <div className='ltextcont2'>

            <h1>HOW TO BUY</h1>

          </div>
          <div className='landscape'>

            <img src={sticker} alt='hello' className='stickerLeft' />
            <div className='centercolumnimg'>
              <FaWallet size={100} color='#3071a9' />
            </div>
            <div className='colcol'>
              <h1>Create a Wallet</h1>
              <p>Download the Sui wallet or your preferred wallet from the App Store or Google Play Store at no cost. If you're using a desktop, obtain the Google Chrome extension.</p>
            </div>
          </div>
          <div className='landscape'>

            <img src={sticker} alt='hello' className='stickerRight' />
            <div className='centercolumnimg'>
              <img src={wt} alt="hello" />
            </div>
            <div className='colcol'>
              <h1>Get SUI</h1>
              <p>Ensure you have SUI in your wallet to convert for $PABST. If you don't possess any SUI, you can acquire it directly on your wallet or through an exchange.</p>
            </div>
          </div>
          <div className='landscape'>

            <img src={sticker} alt='hello' className='stickerLeft' />
            <div className='centercolumnimg'>
              <img src={logo} alt="hello" />
            </div>
            <div className='colcol'>
              <h1>Go to BlueMove or Hop.ag</h1>
              <p>Connect your wallet to the dex and then buy $SUIBA</p>
            </div>
          </div>



        </div>

      </div>






      <div className="foot hero texture">

        <div className='centercolumn'>

          <img src={logo} alt="hello" style={{ height: "23rem", width: "auto" }} />
          <h1>BE A SUIBA SOLDIER</h1>

          <div className='buttonsH'>
            <a className='logs' href="https://t.me/SuibaPortal" target='_blank' rel="noreferrer">
              <FaTelegramPlane size={25} color='black' />
            </a>

            <a className='logs' href="https://x.com/suibaonsui" target='_blank' rel="noreferrer">
              <FaXTwitter size={25} color='black' />

            </a>
            <a className='logs' href="https://dexscreener.com/sui/0xe057718861803021cb3b40ec1514b37c8f1fa36636b2dcb9de01e16009db121c" target='_blank' rel="noreferrer">
              <img src={dex} className='dex' alt='dex' />
            </a>
            <div className='btnBig'><a href="https://dex.bluemove.net/swap/0x2::sui::SUI/0xed4504e791e1dad7bf93b41e089b4733c27f35fde505693e18186c2ba8e2e14b::suib::SUIB" target="_blank" rel="noreferrer">BUY NOW</a></div>
          </div>
          <p>
            Disclaimer: $SUIB is a community coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is for entertainment purposes only.
          </p>


        </div>

      </div>
    </div >

  );
}

export default Home; 