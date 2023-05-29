import AdminMenuBar from "./AdminMenuBar";

 
 function Adminprofile(){
    return (
        <div className="flex flex-col min-h-screen">
          <AdminMenuBar/>
          <div className="max-w-3xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">My Profile</h1>
    
            <div className="flex items-center mb-8">
              {/* <img src="/profile-picture.png" alt="Profile Picture" className="w-24 h-24 rounded-full mr-4" /> */}
              <div>
                <h2 className="text-xl font-semibold">Yehia El Sebaei</h2>
                <p className="text-gray-600">Admin, Manager, and Engineer</p>
              </div>
            </div>
    
            <div className="border-t border-gray-300 py-4">
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <p className="mb-2">
                <span className="font-semibold">Full Name:</span> Yehia Mostafa Labib George El Sebaei
              </p>
              <p className="mb-2">
                <span className="font-semibold">Date of Birth:</span> November 20, 2002
              </p>
              <p className="mb-2">
                <span className="font-semibold">Email:</span> Admin.Admin@gmail.com
              </p>
              <p className="mb-2">
                <span className="font-semibold">Phone Number:</span> +20 100 098 1773
              </p>
            </div>
    
            <div className="border-t border-gray-300 py-4">
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <p className="mb-2">
                <span className="font-semibold">Street:</span> Youssef El Sebaei
              </p>
              <p className="mb-2">
                <span className="font-semibold">City:</span> Cairo
              </p>
              <p className="mb-2">
                <span className="font-semibold">Country:</span> Egypt
              </p>
              <p className="mb-2">
                <span className="font-semibold">Zip Code:</span> 12543
              </p>
            </div>
    
          </div>
          
        </div>
      );

 }

 export default Adminprofile;