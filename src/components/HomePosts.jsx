const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left -: Image area*/}
      <div className="w-[35%] h-[200px] justify-center items-center">
        <img
          src="https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/Apple_MB953LL_A_27_iMac_Desktop_Computer_1256054601_656542.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right -: text area*/}
      <div className="flex flex-col w-[65%]">

        {/* title */}
        <h1 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
          10 Uses of Artifical Intelligence
        </h1>

        {/* timestamps + author */}
        <div className="flex items-center justify-between mb-2 md:mb-4 text-gray-500 text-sm font-semibold">
          <p>@Pubudu_perera</p>

          <div className="flex space-x-2 text-sm">
            <p>06/12/2023</p>
            <p>19:41:10</p>
          </div>
        </div>

        {/* summary */}
        <p className="text-sm md:text-md">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
