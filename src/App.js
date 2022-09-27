import React, { useState } from 'react';
import './style.css';

// react component = function / class yang me-return JSX
// 1. awal nama diawalai dengan huruf capital
// 2. hanya bisa me-return sebuah parent element
// 3. bisa memiliki state dan props
// 4. bisa dipanggil di component lain dengan cara <NamaComponent/>
export default function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('Ini Default Text');
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState('black');
  return (
    <>
      <div className="container">
        <h1>Jumlah : {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Tambah
        </button>

        <button
          onClick={() => {
            if (count >= 1) {
              setCount(count - 1);
              return;
            }
          }}
        >
          Kurangin
        </button>
        <h3
          style={{
            // properti css + variable
            fontSize: fontSize + 'px',
            color: color,
          }}
        >
          {text}
        </h3>
        <input
          type="text"
          placeHolder="Masukan Text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <div>
          <input
            type="range"
            min={1}
            max={100}
            onChange={(e) => {
              setFontSize(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="color"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}
