const Navbar = ({ selectedTab, setSelectedTab }) => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-semibold">My School</div>
          <div className="flex space-x-4">
            <a
              href="#"
              className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                selectedTab === "StudentList" && "active"
              } `}
              onClick={() => setSelectedTab("StudentList")}
            >
              Home
            </a>
            <a
              href="#"
              className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                selectedTab === "AddStudent" && "active"
              } `}
              onClick={() => setSelectedTab("AddStudent")}
            >
              Add New Student
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
