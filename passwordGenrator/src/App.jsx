import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [lenth, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  }, [passwordRef, password])
  const passwordGenrator = useCallback(() => {
    let result = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllow) {
      str += '0123456789'
    }
    if (charAllow) {
      str += '!@#$%^&*()_+[]{}|;:,.<>?'
    }
    for (let i = 0; i <= lenth; i++) {
      result += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(result)
  }, [lenth, numberAllow, charAllow, setPassword])
  // passwordGenrator()
  useEffect(() => { passwordGenrator() }, [lenth, numberAllow, charAllow, passwordGenrator])
  return (
    <>
      <h1 className="text-4xl text-center text-white">PassWord Genrator</h1>
      <div className="flex items-center justify-center overflow-hidden h-screen">
        <div className="bg-[#1f2937] p-6 rounded-xl w-[600px]">
          <div className="flex items-center space-x-2">
            <input type="text" ref={passwordRef} value={password} readOnly className="flex-1 text-orange-500 bg-white rounded px-3 py-1" />
            <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600" onClick={copyPasswordtoClipboard}>copy</button>
          </div>
          <div className="mt-4"><input type="range" min={6} max={100} value={lenth} className="w-full cursor-pointer" onChange={(e) => setLength(e.target.value)} />
            <div className="flex justify-between mt-1 text-orange-400">
              <span>Length ({lenth})</span>
              <label className="flex items-center space-x-1"><input type="checkbox" checked={numberAllow} onChange={(e) => setNumberAllow((prev) => !prev)} /> <span>Numbers</span> </label>
              <label className="flex items-center space-x-1"> <input type="checkbox" checked={charAllow} onChange={(e) => setCharAllow((prev) => !prev)} /> <span>Characters</span></label>
            </div>
          </div>
        </div>
        {/* Toast Message */}
        {showMessage && (
          <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in-out z-50">
            ✅ Password Copied!
          </div>
        )}
      </div>
    </>
  )
}

export default App
