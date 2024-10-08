const AddStudent = () => {
    return <>
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
  <h2 className="text-2xl font-bold mb-4 text-gray-800">Student Information Form</h2>

  <div className="mb-4">
    <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      placeholder="Enter student's name"/>
  </div>

  <div className="mb-4">
    <label for="standard" className="block text-gray-700 text-sm font-bold mb-2">ClassNamclassName (Standard)</label>
    <input 
      type="text" 
      id="standard" 
      name="standard" 
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      placeholder="Enter className or standard" />
  </div>

  <div className="mb-4">
    <label for="hobbies" className="block text-gray-700 text-sm font-bold mb-2">Hobbies</label>
    <input 
      type="text" 
      id="hobbies" 
      name="hobbies" 
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      placeholder="Enter hobbies"/>
  </div>

  <div className="flex justify-center">
    <button 
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="submit">
      Submit
    </button>
  </div>
</div>
</>
};

export default AddStudent;