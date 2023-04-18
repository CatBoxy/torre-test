import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../header/Header';
import { useParams } from "react-router-dom";
import './User.styles.css'
import placeholder from '../../../assets/img/placeholder.png'

// const { VITE_APP_API_BIO_ENDPOINT } = import.meta.env;

const User = (props) => {

    const [userData, setUserData] = useState(null);
    const [strengths, setStrengths] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { username } = useParams();
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://torre-back-ke73uobv6q-uc.a.run.app/api/user/${username}`);
                setUserData(response.data);
                setStrengths(response.data.strengths);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if (loading) {
        return (
            <>
                <Header />
                <main id='user'>
                    <div className='loading'>
                        <div >Loading...</div>
                    </div>
                </main>
            </>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    let master = strengths.filter((strength) => strength.proficiency === 'master')
    let expert = strengths.filter((strength) => strength.proficiency === 'expert')
    let proficient = strengths.filter((strength) => strength.proficiency === 'proficient')
    let novice = strengths.filter((strength) => strength.proficiency === 'novice')
    let interested = strengths.filter((strength) => strength.proficiency === 'no-experience-interested')

    return (
        <>
            <Header />
            <main id='user'>
                <div className='mainLayout'>
                    <div className='avatar'>
                        <img className='avatarImage' src={userData.person.picture ? userData.person.picture : placeholder} alt="avatarPicture" />
                        <h2 className='avatarName'>{userData?.person.name}</h2>
                    </div>
                    <div className='skills'>
                        <h3>Skills and interests:</h3>
                        <div className='skill'>
                            <h4>Master</h4>
                            <div>
                                {master.length > 0 ? master.map((strength) => (
                                    <button className='skillTag' key={strength.id}>{strength.name}</button>
                                )) : <p>[empty]</p>
                                }
                            </div>
                        </div>
                        <div className='skill'>
                            <h4>Expert</h4>
                            <div>
                                {expert.length > 0 ? expert.map((strength) => (
                                    <button className='skillTag' key={strength.id}>{strength.name}</button>
                                )) : <p>[empty]</p>}
                            </div>
                        </div>
                        <div className='skill'>
                            <h4>Proficient</h4>
                            <div>
                                {proficient.length > 0 ? proficient.map((strength) => (
                                    <button className='skillTag' key={strength.id}>{strength.name}</button>
                                )) : <p>[empty]</p>}
                            </div>
                        </div>
                        <div className='skill'>
                            <h4>Begginer</h4>
                            <div>
                                {novice.length > 0 ? novice.map((strength) => (
                                    <button className='skillTag' key={strength.id}>{strength.name}</button>
                                )) : <p>[empty]</p>}
                            </div>
                        </div>
                        <div className='skill'>
                            <h4>No experience, but interested</h4>
                            <div>
                                {interested.length > 0 ? interested.map((strength) => (
                                    <button className='skillTag' key={strength.id}>{strength.name}</button>
                                )) : <p>[empty]</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default User;
