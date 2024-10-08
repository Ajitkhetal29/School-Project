const StudentList = () => {
  return (
    <>
       <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">John Doe</h2>
        <p className="text-gray-700 text-base mb-2">Class: 10th Grade</p>
        <p className="text-gray-700 text-base mb-2">Hobbies: Reading, Football</p>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Delete
        </button>
      </div>
    </div>
    </>
  );
};

export default StudentList;
