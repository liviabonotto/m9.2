import React, { useState } from "react";
import Styles from "./distribution-list.module.scss";
import Modal from "../../components/modal/modal";
import DistributionModal from "./components/distribution-modal/distribution-modal";
import Header from "../../components/header/header";
import Path from "../../components/path/path";
import { FaPlus } from "react-icons/fa";
import DistributionTable from "./components/distribution-table/distribution-table";

const DistributionList: React.FC = () => {
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
    return <DistributionModal data={data} />;
  };

  const path = [
    {
      title: "Início",
      url: "/"
    },
    {
      title: "Distribuição",
      url: "/distributionList"
    }
  ]

  return (
    <>
      <div className={Styles.distributionList}>
        {opened && (
          <Modal
            testid="modal"
            title="Nova distribuição"
            content={content()}
            close={() => setOpened(!opened)}
          />
        )}

        <Header />
        <Path path={path} />
        <div className={Styles.container}>
          <div className={Styles.header}>
            <h1>Pesquisa de Instalação de Software</h1>
            <button data-testid='create-button' onClick={() => setOpened(true)}>
              Nova distribuição <FaPlus size={14} />
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
          <DistributionTable></DistributionTable>
        </div>
      </div>
    </>
  );
};

export default DistributionList;
