

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-center text-white p-4 md:p-8 font-montserrat">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
          <p>
            <i className="fas fa-envelope mr-2"></i>
            desalegnhabtamu31@gmail.com
          </p>
          <p>
            <i className="fas fa-phone mr-2"></i>
            +2519 7460 4306
          </p>
        </div>

        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex justify-center items-center space-x-2">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-semibold mb-2">Additional Info</h2>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()}BlogIY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
