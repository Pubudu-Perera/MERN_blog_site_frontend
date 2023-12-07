const Footer = () => {
  return (
    <>
      <div className="flex justify-between w-full text-sm md:text-md bg-black mt-8 px-8 md:px-[500px] py-6">
        <div className="flex flex-col text-white">
          <p>Featured Blogs</p>
          <p>Most Viewed</p>
          <p>Readers Choice</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Forum </p>
          <p>Support</p>
          <p>Recent Posts</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>

      <p className="text-white bg-black text-center py-2 pb-2">
        All Rights Reservered @blog 2024
      </p>
    </>
  );
};

export default Footer;
