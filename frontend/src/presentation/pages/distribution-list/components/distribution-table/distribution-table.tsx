import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FiEdit } from "react-icons/fi";
import Styles from './distribution-table.module.scss'

const data = [
  {
    name: 'Pesquisa novos usuários',
    channel: 'Whatsapp',
    date: '03/11/2023',
    status: 'Ativo',
  },
  {
    name: 'Pesquisa antigos usuários',
    channel: 'E-mail',
    date: '05/10/2023',
    status: 'Ativo',
  },
  {
    name: 'Pesquisa com público alvo',
    channel: 'Whatsappp',
    date: '08/12/2023',
    status: 'Ativo',
  },
  {
    name: 'Pesquisa com público secundário',
    channel: 'E-mail',
    date: '03/02/2024',
    status: 'Ativo',
  },
  // {
  //     name: 'João',
  //     phone: '123456789',
  //     email: 'teste@teste.com',
  //     channel: 'E-mail',
  //     status: 'Ativo',
  // },
  // {
  //     name: 'João',
  //     phone: '123456789',
  //     email: 'teste@teste.com',
  //     channel: 'E-mail',
  //     status: 'Ativo',
  // },
];

export default function DistributionTable() {
  return (
    <TableContainer className={Styles.table} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell data-testid="name" >Distribuição</TableCell>
            <TableCell data-testid="channel" align="right">Canal</TableCell>
            <TableCell data-testid="created" align="right">Criado em</TableCell>
            <TableCell data-testid="status" align="right">Status</TableCell>
            <TableCell data-testid="action" align="right">Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length ? (
            data.map((row: any) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.channel}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">
                  <FiEdit size={20} />
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
