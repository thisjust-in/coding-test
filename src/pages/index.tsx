import { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import styled from 'styled-components';
import UserList from '@/components/Userlist';
import Counter from '@/components/Counter';

const Container = styled.div`
  width: 100%;
`

const Section = styled.div`
  background: #e7c58f;
  padding: 25px 40px;
`

export default function Home() {
  const [userData, setUserData] = useState([])
  console.log('userData: ', userData);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response =  await axios.get('/api/users')
        if(response.status === 200){
          setUserData(response.data.users)
        }
      } catch (error) {
        // Note: use sentry to log error in future
        console.log('error: ', error);
      }
      
    }
    fetchUserData()
  }, []);
  
  return (
    <>
      <Head>
        <title>home page</title>
        <meta name="description" content="home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <UserList userData={userData} title={'Users'} />
        <Section>
          <Counter />
        </Section>
      </Container>
    </>
  )
}
