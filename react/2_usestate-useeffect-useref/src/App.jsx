import { useEffect, useState } from "react";
import UseRefExample from "./UseRefExample";

const App = () => {
  // Api'dan user verisini alacak fonksiyon
  const getUser = () => {
    fetch(`https://dummyjson.com/users/${userId} `)
      .then((res) => res.json())
      .then((user) => console.log(user));
  };

  // state kurulumu
  const [userId, setUserId] = useState(1);

  // useEffect kurulumu
  useEffect(() => {
    getUser();
    // Burada componentin güncellenme anınıda izlemek için useEffect'e bir bağımlılık verdik.Bu bağımlılık değiştikçe useEffect içerisindeki kodlar yeniden çalışacak
  }, [userId]);

  console.log(userId);

  return (
    <div className="page py-3 px-4 ">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center gap-3 py-4">
          <button
            onClick={() => setUserId(userId - 1)}
            className="btn btn-danger btn-lg"
            disabled={userId === 1}
          >
            -
          </button>

          <h1 className="fs-1 fw-bold">{userId}</h1>

          <button
            onClick={() => setUserId(userId + 1)}
            className="btn btn-success btn-lg"
          >
            +
          </button>
        </div>

        {/* UseRef Example */}
        <UseRefExample />
      </div>
      {/* User Id */}
    </div>
  );
};

export default App;
