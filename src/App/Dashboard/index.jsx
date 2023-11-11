import { Blocks } from './Blocks/Blocks';
import { MyData } from './MyData/MyData.jsx';
import { EditIcon } from '../Components/Icons/EditIcon.jsx';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon.jsx';
import { CalendarIcon } from '../Components/Icons/CalendarIcon.jsx';
import { ElementIcon } from '../Components/Icons/ElementIcon.jsx';
import './styles.css';
export const Edycja = <EditIcon />;
export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h1>Dashboard</h1>
        <p>
          Strona główna kursanta (o sobie, zdjęcie, opis narzędzi
          wykorzystywanych na kursie oraz umejętności zdobytych na kursie)
        </p>
        <div className="grid-components">
          <Blocks
            icon={<EditIcon className="width" />}
            title="Ćwiczenia"
            text="wszystkie wykonane ćwiczenia"
          />
          <Blocks
            icon={<PersonalCardIcon className="width" />}
            title="Moje CV"
            text="podgląd cv wraz z doświadczeniem"
            link="https://www.figma.com/file/nkTW0gq2tPQbmJkJN9WAki/KURS_FRONT_END_DEVELOPER_ARP?type=design&mode=design"
          />
          <Blocks
            icon={<CalendarIcon className="width" />}
            title="Kalendarz"
            text="Planowane wydarzenia"
          />
          <Blocks
            icon={<ElementIcon className="width" />}
            title="FAQ"
            text="odpowiedzi na najczęstsze pytania"
          />
        </div>
      </div>
      <div className="mydata">
        <MyData />
      </div>
    </div>
  );
};
