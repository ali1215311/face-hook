const PostBody = ({ postImg, content }) => {
  return (
    <>
      <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
        <p>{content}</p>
        {postImg && (
          <div className="flex items-center justify-center overflow-hidden">
            <img
              className="w-1/2"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${postImg}`}
              alt="poster"
            />
          </div>
        )}
      </div>
    </>
  );
};
export default PostBody;
