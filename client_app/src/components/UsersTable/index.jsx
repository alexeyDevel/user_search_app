import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import userStore from "../../store/userStore";
import { ClockLoader } from "react-spinners";
import style from "./UsersTable.module.scss";


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const UsersTable = () => {
  const [users, isFetchingUsers] = userStore(
    (state) => [state.users, state.isFetchingUsers]
  );

  return isFetchingUsers ? (
    <ClockLoader color="#ffffff" className={style.clockLoader} />
  ) : users.length > 0 ? (
    <TableContainer>
      <Table variant="simple" className={style.table}>
        <Thead>
          <Tr>
            <Th>Email</Th>
            <Th isNumeric>Number</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.email}</Td>
              <Td isNumeric>{user.number}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  ) : (
    <p>Список пользователей пуст</p>
  );
};

export default UsersTable;
