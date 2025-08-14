import { useEffect, useState } from "react";
import UserCard from "./UserCard";

// todo: Bu component içerisinde component ekrana geldiğinde api'a istek atıp api'dan kullanıcı verilerini aldıktan sonra ekranda bu kullanıcıları renderlayacağız.
const Users = () => {
  // Kullanıcılar verisini yönetmek için state kurulumu
  const [users, setUsers] = useState([]);

  // Api'dan veri alacak fonksiyon
  const fetchUsers = async () => {
    // Api'a istek at
    const response = await fetch("https://dummyjson.com/users");

    // Api'dan gelen veriyi JSON'dan JS objesine çevir
    const data = await response.json();

    // Api'dan gelen veriyi component içerisinde yönetmek istiyoruz.Bunun için users state'ine api'dan gelen data içerisindeki users dizisini aktar
    setUsers(data.users);
  };

  // Bileşenin ekrana gelme anını izlemek için useEffect kurulumunu yap
  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  // ! Çoklu renderlama:

  // Bir component içerisinde bir yapıyı birden fazla kez renderlama işlemine çoklu renderlama denir.

  return (
    <div>
      {/* Buradaki çoklu renderlama işlemi sırasında react her elemanı ayırt etmek için bizden bir key değeri ister. */}

      <h1 className="fs-1 fw-bold mt-5">Users:</h1>
      <div className="users-cart-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
