import { FC, useState, FormEvent } from "react";
import Image from "next/future/image";
import CustomButton from "../button/button.component";
import CustomInput from "../input-text/input-text.component";
import CustomSelect from "../select/select.component";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { saveFormData } from "../../redux/form-data/form-data.slice";

import CitiesDB from "../../resources/DB/cities.json";
import SourcesDB from "../../resources/DB/sources.json";
import logo from "../../resources/img/logo.png";
import arrowicon from "../../resources/img/arrow-icon.png";

const RequestForm: FC = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.value);
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

  const checkOnlyLetters = (data: string) => {
    if (data === "") return true;
    return /^[a-zA-Zа-яА-Я]+$/.test(data);
  };

  const checkLettersWithSpace = (data: string) => {
    if (data === "") return true;
    return /^[a-zA-Zа-яА-Я\s]+$/.test(data);
  };

  const checkPhoneNumber = (data: string) => {
    if (data === "") return true;
    return /^\+?[0-9]{11}$/.test(data);
  };

  //    да, все эти проверки я писал вручную, что поделать, если type="url" у инпутов настолько кастрированный,
  //    что заставляет в начале ссылки приписывать 'https://'
  const checkLink = (data: string) => {
    if (data === "") return true;
    return /^(https:\/\/)?[a-zA-zа-яА-Я0-9]+\.[a-zA-zа-яА-Я]+(\/[\w]+)?$/.test(
      data
    );
  };

  const checkForm = () => {
    return (
      name !== "" &&
      checkOnlyLetters(name) &&
      checkPhoneNumber(phoneNumber) &&
      checkLink(link) &&
      city !== "" &&
      checkLettersWithSpace(fullName)
    );
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const resetForm = event.target as HTMLFormElement;
    setIsSendingData(true);
    const data = {
      name,
      phoneNumber,
      email,
      link,
      city,
      studioName,
      fullName,
      source,
    };
    setTimeout(() => {
      setIsSendingData(false);
      dispatch(saveFormData(data));
    }, 2000);
    resetForm.reset();
    setName("");
    setPhoneNumber("");
    setEmail("");
    setLink("");
    setCity("");
    setStudioName("");
    setFullName("");
    setSource("");
  };

  return (
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
            Если Вы оформляете интерьеры жилых или коммерческих помещений — мы с
            радостью поможем Вам: составим уникальные условия сотрудничества,
            предоставим 3D модели (уточняйте у менеджеров) и разработаем
            коммерческое предложение к Вашему проекту или изображениям.
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
              !checkPhoneNumber(phoneNumber) ? "Некорректный номер" : undefined
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
          disabled={!checkForm()}
          loading={isSendingData}
        >
          Отправить заявку
        </CustomButton>
      </form>
    </div>
  );
};

export default RequestForm;
