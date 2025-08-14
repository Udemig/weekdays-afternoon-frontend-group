const CounterCopy = () => {
  let count = 0;
  const desc = () => {
    count--;

    console.log(count);
  };
  const inc = () => {
    count++;

    console.log(count);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center pb-4">Counter</h1>
      <div className="w-50 m-auto d-flex align-items-center justify-content-between ">
        <button onClick={desc} className="btn btn-danger px-4 fs-2">
          -
        </button>
        <h1 className="fw-bold">{count}</h1>
        <button onClick={inc} className="btn btn-success px-4 fs-2">
          +
        </button>
      </div>
    </div>
  );
};

export default CounterCopy;
