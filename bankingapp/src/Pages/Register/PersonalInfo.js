

function PersonalInfo({formData,setFormData}){
    
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  };
    return ( <div className="bg-white shadow-md rounded px-8 py-6">
    <h1 className="text-2xl font-bold mb-4">Register</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label  className="block text-gray-700 font-bold mb-2">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData,firstName:e.target.value})}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            onFocus={()=>speak('enter your first name')}
          />
        </div>
        <div>
          <label  className="block text-gray-700 font-bold mb-2">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) =>setFormData({...formData,lastName:e.target.value})}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            onFocus={()=>speak('enter your last name')}
          />
        </div>
      </div>
      <div className="mb-4">
        <label  className="block text-gray-700 font-bold mb-2">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={formData.userName}
          onChange={(e) => setFormData({...formData,userName: e.target.value})}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          onFocus={()=>speak('enter your username')}
        />
      </div>
      <div className="mb-4">
        <label  className="block text-gray-700 font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData,password: e.target.value})}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          onFocus={()=>speak('enter your password')}
        />
      </div>
      <div className="mb-4">
        <label  className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData,email: e.target.value})}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          onFocus={()=>speak('enter your email')}
        />
      </div>
      <div className="mb-4">
        <label  className="block text-gray-700 font-bold mb-2">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          value={formData.phone}
          onChange={(e) => setFormData({...formData,phone: e.target.value})}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          onFocus={()=>speak('enter your phone number')}
        />
      </div>
      
    
  </div>)

}

export default PersonalInfo;