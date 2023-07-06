import styled from 'styled-components';

type User = {
 id: number;
 name: string;
};
  
type Props = {
 userData: User[];
 title: string;
};

const Title = styled.div`
  font-size: 36px;
  color: #131313;
`

const StyledList = styled.li`
  font-size: 20px;
  color: #3f3f3f;
`
  
  const UserList: React.FC<Props> = ({ userData, title }) => {
    return (
        <>
        <Title>{title}</Title>
        <ul>
            {userData?.map((user) => (
            <StyledList key={user.id}>{user.name}</StyledList>
            ))}
        </ul>
        </>
    );
  };
  
  export default UserList;