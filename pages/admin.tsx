import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { useSession, signIn, signOut  } from "next-auth/react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Admin.module.css'

type Props = {
  adminTest: String
}

const Admin: NextPage<Props> = ({adminTest}) => {
  const { data: session } = useSession()

  if (session) {
    console.log(session)
    return (
      <>
        Signed in as {session.user?.username} <br />
        <p>{adminTest}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export const getServerSideProps:GetServerSideProps = async (context:GetServerSidePropsContext) => {
  return {
    props: {
      adminTest: 'Admin Test String'
    },
  }
}

export default Admin

