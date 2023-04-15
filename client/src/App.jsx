import React, { useState } from "react";
import "./index.css";


const CallbackForm = () => {
    const [email, setEmail] = useState("");
    const [telegram, setTelegram] = useState("");
    const [firstName, setfirstName] = useState('');
    const [secondName, setsecondName] = useState('');
    const [patronymic, setpatronymic] = useState('');
	const [value, setCity] = useState('');
    const [vakancy, setVakancy] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [file, setFile]= useState("");

/*  const handleSubmit = (event) => {
    event.preventDefault();
    // Отправка формы
  };*/

  const validateEmail = (email) => {
    // Регулярное выражение для проверки адреса электронной почты
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(validateEmail(event.target.value));

  };
const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, secondName, patronymic , telegram, vakancy, value , email }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
};


    return (
        <div className="main">
            <div className="submain">
                <form onSubmit={handleSubmit}>
        <h1>Форма регистрации
                        </h1>
      <div className="input">
        <label htmlFor="email">Электронная почта:</label>
                        <input type="email" id="email" name="email" placeholder="sberbankcorp@sber.ru" value={email} onChange={handleEmailChange} required />
        {!isValidEmail && <span style={{ color: "red" }}>Неправильный формат адреса электронной почты</span>}
                    </div>

    <div className="input">
        <label>
            Ваш Telegram:
            <input
                type="text"
                placeholder="@poimanzajopu"
                value={telegram}
                onChange={(event) => setTelegram(event.target.value)}
            />
        </label>
    </div>
    
      <div className="input">
      <label>
        Имя пользователя:
        <input
          type="text"
          placeholder="Иван"
          value={firstName}
          onChange={(event) => setfirstName(event.target.value)}
        />
      </label>
    </div>

        <div className="input">
            <label>
                Фамилия пользователя:
                <input
                    type="text"
                    placeholder="Наумов"
                    value={secondName}
                    onChange={(event) => setsecondName(event.target.value)}
                />
            </label>
        </div>

        <div className="input">
            <label>
                Отчество пользователя:
                <input
                    type="text"
                    placeholder="Николаевич"
                    value={patronymic}
                    onChange={(event) => setpatronymic(event.target.value)}
                />
            </label>
        </div>

      <div>
      <label>
        Город:  
          <select value={value} onChange={(event) => setCity(event.target.value)}>
            <option value="1">Санкт-Петербург</option>
            <option value="2">Москва</option>
            <option value="3">Краснодар</option>
            <option value="4">Урюпинск</option>
          </select>
          </label>
          </div>



          <div>
              <label>
                  Вакансия:
                  <select value={vakancy} onChange={(event) => setVakancy(event.target.value)}>
                      <option value="1">Front-end</option>
                      <option value="2">Back-end</option>
                      <option value="3">HR-отдел</option>
                  </select>
              </label>
          </div>



          <div>
      <label>
        Загрузить резюме:
        <input
          type="file"
          name="file"
          onChange={(event) => setFile(event.target.value)}
        />
      </label>
      </div>



      <button type="submit">Отправить форму</button>
            </form>
     </div>
</div>
  );
};

export default CallbackForm;


/*import React, { useState } from 'react';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;
*/