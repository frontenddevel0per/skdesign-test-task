import { FC, useState } from "react";
import Image from "next/future/image";
import CustomButton from "../button/button.component";
import CustomInput from "../input-text/input-text.component";
import CustomSelect from "../select/select.component";

import CitiesDB from "../../resources/DB/cities.json";
import SourcesDB from "../../resources/DB/sources.json";
import logo from "../../resources/img/logo.png";
import arrowicon from "../../resources/img/arrow-icon.png";

const RequestForm: FC = () => {
  const [city, setCity] = useState("");
  const [source, setSource] = useState("");
  const [isShowMore, setIsShowMore] = useState(false);

  const updateCityData = (data: string) => {
    setCity(data);
  };

  const updateSourceData = (data: string) => {
    setSource(data);
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
      <form>
        <div className="form-section">
          <CustomInput id="name" label="Ваше имя *" placeholder="Иван" />
          <CustomInput
            id="phone-number"
            label="Номер телефона *"
            placeholder="+7 (000) 000-00-00"
          />
        </div>
        <div className="form-section">
          <CustomInput
            id="email"
            label="E-mail *"
            placeholder="example@skdesign.ru"
          />
          <CustomInput
            id="link"
            label="Ссылка на профиль *"
            placeholder="instagram.com/skde…"
          />
        </div>
        <CustomSelect
          label={
            city === ""
              ? "Выберите город *"
              : CitiesDB.find((item) => item.id === city)?.name
          }
          arr={CitiesDB}
          updateData={updateCityData}
        />
        <CustomInput
          id="studioname"
          label="Название организации/студии"
          placeholder="SK Design"
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
            <CustomInput id="recipient" label="Получатель" placeholder="ФИО" />
            <CustomSelect
              label={source === "" ? "Откуда узнали про нас?" : source}
              arr={CitiesDB}
              updateData={updateSourceData}
            />
          </>
        )}
        <CustomButton type="submit">Отправить заявку</CustomButton>
      </form>
    </div>
  );
};

export default RequestForm;
