import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FiEdit, FiEye } from "react-icons/fi";
import Styles from "./research-table.module.scss";
import { Navigate, useNavigate } from "react-router-dom";

const data: any = [
  {
    name: "Pesquisa de Instalação de Software",
    date: "03/11/2023",
    status: "Ativo",
  },
  {
    name: "Pesquisa da venda de cadernos",
    date: "05/10/2023",
    status: "Ativo",
  },
  {
    name: "Pesquisa da venda de canetas",
    date: "08/12/2023",
    status: "Ativo",
  },
  {
    name: "Pesquisa da venda de classificadores",
    date: "03/02/2024",
    status: "Ativo",
  },
];

export default function ResearchTable() {
  const navigate = useNavigate()

  return (
    <TableContainer className={Styles.table} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell data-testid='name'>Pesquisa</TableCell>
            <TableCell data-testid='created' align="right">Criado em</TableCell>
            <TableCell data-testid='status' align="right">Status</TableCell>
            <TableCell data-testid='action' align="right">Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="trBody">
          {data.length ? (
            data.map((row: any) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">
                  <div className={Styles.action}>
                    <FiEye data-testid='go-to-distribution' onClick={() => navigate('/distributionList')} size={20} />
                    <FiEdit size={20} />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>Nenhuma pesquisa encontrada</TableCell>
            </TableRow>
          )}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
