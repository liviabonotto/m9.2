import React, { useState } from "react";
import Styles from "./research-list.module.scss";
import Modal from "../../components/modal/modal";
import Header from "../../components/header/header";
import Path from "../../components/path/path";
import { FaPlus } from "react-icons/fa";
import ResearchModal from "./components/research-modal/research-modal";
import ResearchTable from "./components/research-table/research-table";

const ResearchList: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const data = {
    name: "Canal de distribuição",
    defaultValue: "email",
    options: [
      {
        label: "E-mail",
        value: "email",
      },
      {
        label: "Whatsapp",
        value: "whatsapp",
      },
    ],
  };

  const content = () => {
    return <ResearchModal data={data} />;
  };

  const path = [
    {
      title: "Início",
      url: "/"
    },
  ]

  return (
    <>
      <div className={Styles.ResearchList}>
        {opened && (
          <Modal
            testid="modal"
            title="Nova Pesquisa"
            content={content()}
            close={() => setOpened(!opened)}
          />
        )}

        <Header />
        <Path path={path} />
        <div className={Styles.container}>
          <div className={Styles.header}>
            <h1>Todas as pesquisas</h1>
            <button data-testid='create-button' onClick={() => setOpened(true)}>
              Nova pesquisa <FaPlus size={14} />
            </button>
          </div>
          {/* <div className={Styles.selectors}>
            <button>
              Informações <VscGraphScatter size={30} color="#05CE7A" />
            </button>
            <button>
              Distribuição{" "}
              <IoReturnUpForwardOutline size={30} color="#05CE7A" />
            </button>
          </div> */}
          <ResearchTable></ResearchTable>
        </div>
      </div>
    </>
  );
};

export default ResearchList;
