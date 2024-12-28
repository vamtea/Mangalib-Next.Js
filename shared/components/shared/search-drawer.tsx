import Link from "next/link";
import React from "react";
import { Search } from "lucide-react";

interface Props {
  className?: string;
}

type SearchCatalogProps = {
  name?: string;
  id: number;
};

export const SearchDrawer: React.FC<Props> = ({ className }) => {
  const searchRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState<number>(1);
  const activeColor = "#212529";
  const searchCatalog: SearchCatalogProps[] = [
    {
      name: "Тайтлы",
      id: 1,
    },
    {
      name: "Команда",
      id: 2,
    },
    {
      name: "Персонаж",
      id: 3,
    },
    {
      name: "Человек",
      id: 4,
    },
    {
      name: "Франшиза",
      id: 5,
    },
    {
      name: "Издатель",
      id: 6,
    },
    {
      name: "Пользователь",
      id: 7,
    },
  ];

  const [visible, setVisible] = React.useState(true);

  const activeItem = (id: number) => {
    const item = searchCatalog.find((item) => Number(item.id) === Number(id));
    return item ? item.name : null;
  };

  const activeSearh = () => {
    if (active === 1) {
      return (
        <span>
          Расширенный поиск тайтлов находится в{" "}
          <Link href="/catalog" className="text-[#ff6d00]">
            каталоге
          </Link>
        </span>
      );
    }

    if (active === 2) {
      return (
        <span>
          Список всех команд можно найти{" "}
          <Link href="/catalog" className="text-[#ff6d00]">
            на этой странице
          </Link>
        </span>
      );
    }
    if (active === 3) {
      return (
        <span>
          Список всех персонажей можно найти{" "}
          <Link href="/catalog" className="text-[#ff6d00]">
            на этой странице
          </Link>
        </span>
      );
    }
    if (active === 4) {
      return (
        <span>
          Список всех персон можно найти{" "}
          <Link href="/catalog" className="text-[#ff6d00]">
            на этой странице
          </Link>
        </span>
      );
    }
    if (active === 5) {
      return (
        <span>
          Список всех франшиз можно найти{" "}
          <Link href="/catalog" className="text-[#ff6d00]">
            на этой странице
          </Link>
        </span>
      );
    }
    if (active === 6) {
      return (
        <span>
          Список всех издателей можно найти{" "}
          <Link href="/catalog" className="text-[#ff6d00]">
            на этой странице
          </Link>
        </span>
      );
    }
    if (active === 7) {
      return (
        <span>
          Топ 100, топ недели, список модераторов и т.п. можно найти{" "}
          <Link href="/catalog" className="text-[#ff6d00]">
            на этой странице
          </Link>
        </span>
      );
    }
  };

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !event.composedPath().includes(searchRef.current)
      ) {
        setVisible(false);
      }
    };
    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {visible && (
        <div>
          <div
            onClick={() => setVisible(false)}
            className="bg-[#00000099] fixed inset-0 z-[70]"
          ></div>
          <div
            ref={searchRef}
            className="absolute top-0 left-0 right-0 bottom-0 max-w-[740px] mx-auto z-[71] p-[28px]"
          >
            <div className="bg-white rounded-[6px]">
              <div className="flex w-full gap-[14px] px-4 py-4 ">
                <Search color="#dcdee2" size={20} />
                <input
                  type="text"
                  placeholder="Поиск тайтлов"
                  className="w-full  transition-all duration-200 ease-in-out font-normal text-[14px]"
                />
              </div>
              <div className="w-full h-[1px] border-t-[1px] border-[#] " />
              <div className="flex">
                <ul className="text-[14px] px-4 gap-4 flex">
                  {searchCatalog.map((item) => (
                    <li
                      className="py-3 cursor-pointer text-[#212529] opacity-[0.8px]"
                      onClick={() => setActive(item.id)}
                      key={item.id}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full h-[1px] border-t-[1px] border-[#] " />
              <div className="p-3 align-center items-center min-h-[100px] flex justify-center">
                <span className="text-[#8a8a8e] text-[14px]">
                  {activeSearh()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
