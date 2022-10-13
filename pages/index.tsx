import type { NextPage } from "next";
import { useState, FormEvent } from "react";
import Image from "next/future/image";
import CustomButton from "../components/button/button.component";
import CustomInput from "../components/input-text/input-text.component";
import CustomSelect from "../components/select/select.component";
import { useAppDispatch } from "../redux/hooks";
import { saveFormData } from "../redux/form-data/form-data.slice";
import {
  checkOnlyLetters,
  checkPhoneNumber,
  checkEmail,
  checkLink,
  checkLettersWithSpace,
  validateForm,
} from "../helpers/helpers";

import CitiesDB from "../resources/DB/cities.json";
import SourcesDB from "../resources/DB/sources.json";
import logo from "../resources/img/logo.png";
import arrowicon from "../resources/img/arrow-icon.png";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const [isSendingData, setIsSendingData] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [city, setCity] = useState("");
  const [studioName, setStudioName] = useState("");
  const [fullName, setFullName] = useState("");
  const [source, setSource] = useState("");
  const [isShowMore, setIsShowMore] = useState(false);

  const resetFormData = (event: FormEvent<HTMLFormElement>) => {
    setName("");
    setPhoneNumber("");
    setEmail("");
    setLink("");
    setCity("");
    setStudioName("");
    setFullName("");
    setSource("");
    event.currentTarget.reset();
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSendingData(true);
    setTimeout(() => {
      setIsSendingData(false);
      dispatch(
        saveFormData(
          JSON.stringify({
            name,
            phoneNumber,
            email,
            link,
            city,
            studioName,
            fullName,
            source,
          })
        )
      );
    }, 2000);
    resetFormData(event);
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <div className="form-wrapper-greetings">
          <Image src={logo} alt="logo" width={475} height={75} />
          <h1>Оставьте заявку и станьте частью нашей команды</h1>
          <span>
            <p>
              Компания SK Design приглашает к взаимовыгодному сотрудничеству
              креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и
              интерьерные студии — все, кто дизайн интерьера сделали своим
              призванием.
            </p>
            <p>
              Партнерство мы видим как доверительные отношения, основанные на
              честности реализации бизнес идей в сфере создания и продаж
              современной, качественной, удобной, функциональной и эксклюзивной
              мебели.
            </p>
            <p>
              Ознакомиться с проектами можете в нашем <a href="#">портфолио</a>.
              Если Вы оформляете интерьеры жилых или коммерческих помещений — мы
              с радостью поможем Вам: составим уникальные условия
              сотрудничества, предоставим 3D модели (уточняйте у менеджеров) и
              разработаем коммерческое предложение к Вашему проекту или
              изображениям.
            </p>
          </span>
        </div>
        <form onSubmit={(event) => onFormSubmit(event)}>
          <div className="form-section">
            <CustomInput
              id="name"
              label="Ваше имя *"
              placeholder="Иван"
              updateData={setName}
              error={
                !checkOnlyLetters(name) ? "Разрешены только буквы" : undefined
              }
              minLength={2}
              required
            />
            <CustomInput
              id="phone-number"
              label="Номер телефона *"
              type="tel"
              placeholder="+7 (000) 000-00-00"
              updateData={setPhoneNumber}
              error={
                !checkPhoneNumber(phoneNumber)
                  ? "Некорректный номер"
                  : undefined
              }
              minLength={11}
              maxLength={12}
              required
            />
          </div>
          <div className="form-section">
            <CustomInput
              id="email"
              label="E-mail *"
              type="email"
              placeholder="example@skdesign.ru"
              updateData={setEmail}
              minLength={6} //a@b.su
              error={!checkEmail(email) ? "Некорректный email" : undefined}
              required
            />
            <CustomInput
              id="link"
              label="Ссылка на профиль *"
              placeholder="instagram.com/skde…"
              updateData={setLink}
              error={!checkLink(link) ? "Некорректная ссылка" : undefined}
              required
            />
          </div>
          <CustomSelect
            label={city === "" ? "Выберите город *" : city}
            arr={CitiesDB.map((item) => item.name)}
            updateData={setCity}
          />
          <CustomInput
            id="studioname"
            label="Название организации/студии"
            placeholder="SK Design"
            updateData={setStudioName}
          />
          <button
            className={isShowMore ? "show-more-btn" : "show-more-btn down"}
            onClick={() => setIsShowMore(!isShowMore)}
            type="button"
          >
            {isShowMore ? "Скрыть дополнительные поля" : "Показать ещё"}
            <Image src={arrowicon} alt="arrow-icon" width={10} height={10} />
          </button>
          {isShowMore && (
            <>
              <CustomInput
                id="recipient"
                label="Получатель"
                placeholder="ФИО"
                updateData={setFullName}
                error={
                  !checkLettersWithSpace(fullName)
                    ? "Разрешены только буквы"
                    : undefined
                }
              />
              <CustomSelect
                label={source === "" ? "Откуда узнали про нас?" : source}
                arr={SourcesDB}
                updateData={setSource}
              />
            </>
          )}
          <CustomButton
            type="submit"
            disabled={
              !validateForm({ name, phoneNumber, email, link, city, fullName })
            }
            loading={isSendingData}
          >
            Отправить заявку
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default Home;
