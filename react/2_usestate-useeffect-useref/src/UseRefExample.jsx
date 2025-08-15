// useRef hook'unu import et
import { useRef } from "react";

const UseRefExample = () => {
  // useRef'i kullanarak bir referans oluştur
  const inputRef = useRef();

  return (
    <div className="py-5 text-center">
      <form className="d-flex align-items-center gap-3">
        {/* useRef ile oluşturulan referansı inputa aktar */}
        <input
          type="text"
          ref={inputRef}
          placeholder="İsim giriniz ..."
          className="form-control"
        />

        <button
          type="button"
          onClick={() => {
            inputRef.current.focus();
          }}
          className="btn btn-primary"
        >
          Odaklan
        </button>
      </form>
    </div>
  );
};

export default UseRefExample;
