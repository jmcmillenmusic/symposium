import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
const SPOTIFY_CLIENT_ID = '0ce01a95f1a143b9a8c02d3c24cb60cf';
console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
const REDIRECT_URI = 'http://localhost:3000/callback';


const loginURL = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private&response_type=token&state=123`;
const Header = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [showBonzi, setShowBonzi] = useState(false);
    const [isSignupModalOpen, setSignupModalOpen] = useState(false);

    return (
        <div className="py-5 px-8 flex justify-between items-center border-b" style={{ borderColor: '#4F518C' }}>
            <div className="flex items-center">
                <img src="/images/largesymp.png" alt="Logo" className="w-10 h-10" />
                <h1 className="text-3xl font-bold -ml-2" style={{ color: '#DABFFF' }}>ymposium</h1>
            </div>
            <div className="space-x-4">
<<<<<<< HEAD
                {!isSpotifyConnected && <a href={loginURL} onClick={() => setSpotifyConnected(true)} className="px-5 py-2 rounded-full hover:bg-DABFFF" style={{ backgroundColor: '#907AD6' }}>Connect Spotify</a>}
                {isSpotifyConnected && !isUserLoggedIn && <button onClick={() => setLoginModalOpen(true)} className="px-5 py-2 rounded-full hover:bg-DABFFF" style={{ backgroundColor: '#907AD6' }}>Log In</button>}
                {isSpotifyConnected && !isUserLoggedIn && <button onClick={() => setSignupModalOpen(true)} className="px-5 py-2 rounded-full hover:bg-DABFFF" style={{ backgroundColor: '#907AD6' }}>Sign Up</button>}
                {isUserLoggedIn && <Link to="/logout" onClick={() => { setSpotifyConnected(false); setUserLoggedIn(false); }} className="px-5 py-2 rounded-full hover:bg-DABFFF" style={{ backgroundColor: '#907AD6', textDecoration: 'none', display: 'block' }}>Logout</Link>}
            </div>

            {isLoginModalOpen && <LoginModal onClose={() => { setLoginModalOpen(false); setUserLoggedIn(true); }} />}
=======
                <a href={loginURL} className="px-5 py-2 rounded-full hover:bg-DABFFF" style={{ backgroundColor: '#907AD6' }}>Connect Spotify</a>
                <button onClick={() => setLoginModalOpen(true)} className="px-5 py-2 rounded-full hover:bg-DABFFF" style={{ backgroundColor: '#907AD6' }}>Log In</button>
                <button onClick={() => setSignupModalOpen(true)} className="px-5 py-2 rounded-full hover:bg-DABFFF" style={{ backgroundColor: '#907AD6' }}>Sign Up</button>
                <button onClick={() => setShowBonzi(true)}>
                    <img className="object-scale-down h-5" src="./images/bonzi.png" alt="bonzimode" />
                    </button>
                    {
                    showBonzi && 
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
                        <img src="./images/bonzidance.webp" alt="Bonzi Buddy Dancing" className="w-3/4 h-auto animate-bounce" />
                        <button onClick={() => setShowBonzi(false)} className="absolute top-5 right-5 text-white">Close</button>
                        </div>
                        }
                    </div>
            {isLoginModalOpen && <LoginModal onClose={() => setLoginModalOpen(false)} />}
>>>>>>> dae5132000c95bfc56fa0a6f3046148995f9b36c
            {isSignupModalOpen && <SignupModal onClose={() => setSignupModalOpen(false)} />}
        </div>
    );
};

export default Header;