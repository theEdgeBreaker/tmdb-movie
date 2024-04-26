const Pagination = ({ page, setPage, totalPages }) => {
  const onHandlePrev = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const onHandleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="absolute bottom-48 left-16 lg:bottom-36 lg:left-32">
        <button
          className="bg-blue-950 text-white px-4 py-2 text-semibold text-base md:text-lg rounded-md"
          onClick={onHandlePrev}
          disabled={page === 1}
        >
          Previous
        </button>
      </div>

      <div
        className="absolute bottom-52 lg:bottom-40 text-sm md:text-lg "
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >{`${page} of ${totalPages}`}</div>

      <div className="absolute bottom-48 right-16 lg:bottom-36 lg:right-32">
        <button
          className="bg-blue-950 text-white px-8 py-2 text-semibold text-base md:text-lg rounded-md"
          onClick={onHandleNext}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
