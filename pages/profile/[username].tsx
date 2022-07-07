import Head from 'next/head'
import { useRouter } from 'next/router'

import {useState,useEffect} from 'react'

import type { NextPage } from 'next'
import PersonProfile from '../../src/components/PersonProfile'
import { useAppSelector } from '../../src/app/hooks';
import { selectPeopleList } from '../../src/components/PeopleSlice';


const Profile: NextPage = (props) => {
  const peopleList = useAppSelector(selectPeopleList);

  const router = useRouter();
  const { username } = router.query;
  return(
    <>
      <Head>
        <title>Friend Finder | Profile | {username}</title>

      </Head>
      <PersonProfile/>
    </>
  )


}

export default Profile;
